import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion';
import type { InventoryItem, LootBeat, ThreatLevel } from '../types';
import { LootCard } from './LootCard';
import { pickLootFraming } from '../data/rewards';
import { getTheme } from '../themes';
import { useGame } from '../utils/GameContext';

export interface RewardRevealProps {
  creatureName: string;
  gold: number;
  xp: number;
  item: InventoryItem;
  claimed: boolean;
  onClaim: () => void;
  /** Show verified unlock note after 3+ fights */
  verifiedUnlocked?: boolean;
  /** Gate 3 — hotter clearance stake paid on this date */
  hotClearance?: boolean;
  /** Creature threat — framing + table context */
  threat?: ThreatLevel;
  /** Drop beat for one-liner under LootCard */
  lootBeat?: LootBeat;
  /** Actual events from the completed fight, used by R.O.D. commentary. */
  banterFlags?: readonly string[];
  /** Optional backdrop override (defaults probe public paths) */
  artSrc?: string;
  /** Optional gold-pile art override */
  goldArtSrc?: string;
}

const BACKDROP_CANDIDATES = [
  '/reward-backdrop.png',
  '/loot/reward-backdrop.png',
];

const GOLD_PILE_CANDIDATES = [
  '/reward-gold-pile.png',
  '/loot/reward-gold-pile.png',
];

function useOptionalImage(candidates: string[], override?: string): string | null {
  const list = useMemo(() => {
    const out: string[] = [];
    if (override) out.push(override);
    for (const c of candidates) {
      if (!out.includes(c)) out.push(c);
    }
    return out;
  }, [candidates, override]);

  const [src, setSrc] = useState<string | null>(override ?? null);

  useEffect(() => {
    let cancelled = false;
    let idx = 0;

    const tryNext = () => {
      if (cancelled) return;
      if (idx >= list.length) {
        setSrc(null);
        return;
      }
      const next = list[idx++];
      const img = new Image();
      img.onload = () => {
        if (!cancelled) setSrc(next);
      };
      img.onerror = () => tryNext();
      img.src = next;
    };

    tryNext();
    return () => {
      cancelled = true;
    };
  }, [list]);

  return src;
}

const SPARK_COUNT = 18;

function Sparks({ active }: { active: boolean }) {
  const sparks = useMemo(
    () =>
      Array.from({ length: SPARK_COUNT }, (_, i) => {
        const angle = (i / SPARK_COUNT) * Math.PI * 2;
        const dist = 48 + (i % 5) * 18;
        const color = i % 3 === 0 ? 'var(--gold)' : 'var(--pink)';
        const size = 3 + (i % 4);
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist * 0.75 - 20,
          color,
          size,
          delay: 0.15 + (i % 6) * 0.05,
        };
      }),
    [],
  );

  if (!active) return null;

  return (
    <div className="reward-reveal__sparks" aria-hidden>
      {sparks.map((s) => (
        <motion.span
          key={s.id}
          className="reward-reveal__spark"
          style={{
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 8px ${s.color}`,
          }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 1, 0.85, 0],
            x: s.x,
            y: s.y,
            scale: [0.4, 1.2, 0.6],
          }}
          transition={{
            duration: 1.35,
            delay: s.delay,
            ease: 'easeOut',
            repeat: Infinity,
            repeatDelay: 1.8,
          }}
        />
      ))}
    </div>
  );
}

export function RewardReveal({
  creatureName,
  gold,
  xp: _xp,
  item,
  claimed,
  onClaim,
  verifiedUnlocked,
  hotClearance,
  threat = 'Low',
  lootBeat = 'scrap',
  banterFlags,
  artSrc,
  goldArtSrc,
}: RewardRevealProps) {
  const theme = getTheme(useGame().state.activeThemeId);
  const reduceMotion = useReducedMotion();
  const backdrop = useOptionalImage(BACKDROP_CANDIDATES, artSrc);
  const goldPile = useOptionalImage(GOLD_PILE_CANDIDATES, goldArtSrc);

  const goldMv = useMotionValue(0);
  const [displayGold, setDisplayGold] = useState(0);
  const [claimFlash, setClaimFlash] = useState(false);
  const [showStamp, setShowStamp] = useState(claimed);
  const claimedRef = useRef(claimed);

  const framingLine = useMemo(
    () =>
      pickLootFraming({
        threat,
        lootBeat,
        banterFlags,
        hot: hotClearance === true,
      }),
    [threat, lootBeat, hotClearance, banterFlags],
  );

  useMotionValueEvent(goldMv, 'change', (v) => {
    setDisplayGold(Math.round(v));
  });

  useEffect(() => {
    claimedRef.current = claimed;
    if (claimed) setShowStamp(true);
  }, [claimed]);

  useEffect(() => {
    if (reduceMotion) {
      goldMv.set(gold);
      setDisplayGold(gold);
      return;
    }
    goldMv.set(0);
    setDisplayGold(0);
    const controls = animate(goldMv, gold, {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.55,
    });
    return () => controls.stop();
  }, [gold, goldMv, reduceMotion]);

  const handleClaim = useCallback(() => {
    if (claimedRef.current) return;
    setClaimFlash(true);
    setShowStamp(true);
    onClaim();
    window.setTimeout(() => setClaimFlash(false), 700);
  }, [onClaim]);

  const containerVariants = reduceMotion
    ? undefined
    : {
        hidden: { opacity: 0, scale: 0.86 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring' as const,
            stiffness: 260,
            damping: 18,
            mass: 0.9,
            staggerChildren: 0.12,
            delayChildren: 0.08,
          },
        },
      };

  const childVariants = reduceMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 18, scale: 0.92 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: 'spring' as const, stiffness: 320, damping: 20 },
        },
      };

  const ctaLabel = 'Take it';

  return (
    <motion.section
      className={`reward-reveal${claimFlash ? ' reward-reveal--flash' : ''}${
        claimed || showStamp ? ' reward-reveal--claimed' : ''
      }`}
      role="region"
      aria-label={`Souvenir from ${creatureName}: ${item.name}, ${gold} coin`}
      initial={reduceMotion ? false : 'hidden'}
      animate="show"
      variants={containerVariants}
    >
      {backdrop && (
        <img
          src={backdrop}
          alt=""
          className="reward-reveal__backdrop"
          aria-hidden
        />
      )}
      <div className="reward-reveal__veil" aria-hidden />

      <Sparks active={!reduceMotion} />

      <motion.div className="reward-reveal__logo logo-aggro" variants={childVariants}>
        AGGR<span className="heart-o">O</span>
      </motion.div>

      <motion.p className="reward-reveal__dept" variants={childVariants}>
        Baatorasaka · After the date
      </motion.p>

      <motion.h2 className="reward-reveal__title" variants={childVariants}>
        THEY LEFT YOU THIS
      </motion.h2>

      <motion.p className="reward-reveal__eliminated" variants={childVariants}>
        <span className="reward-reveal__eliminated-label">MATCH CONSUMED</span>
        <span className="reward-reveal__creature">{creatureName}</span>
      </motion.p>

      <motion.div className="reward-reveal__loot" variants={childVariants}>
        <div className="reward-reveal__loot-shine is-on" aria-hidden />
        <LootCard item={item} variant="reward" />
        <p className="reward-reveal__framing">{framingLine}</p>
      </motion.div>

      <motion.div className="reward-reveal__gold-block" variants={childVariants}>
        {goldPile ? (
          <img src={goldPile} alt="" className="reward-reveal__gold-art" aria-hidden />
        ) : (
          <span className="reward-reveal__coin" aria-hidden>
            {'\uD83E\uDE99'}
          </span>
        )}
        <div
          className="reward-reveal__gold-amount gold-shimmer"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="reward-reveal__gold-num">{displayGold}</span>
          <span className="reward-reveal__gold-label"> Coin</span>
        </div>
        <p className="reward-reveal__gold-note">
          {hotClearance
            ? 'You put money on this date — it paid.'
            : 'Coin for the night.'}
        </p>
      </motion.div>

      <motion.div className="reward-reveal__claim-wrap" variants={childVariants}>
        {!claimed && !showStamp ? (
          <button
            type="button"
            className="btn btn-pink btn-block reward-reveal__claim pulse"
            onClick={handleClaim}
            aria-label={`${ctaLabel}: ${item.name}`}
          >
            {ctaLabel}
          </button>
        ) : (
          <div className="reward-reveal__stamp-wrap" aria-live="polite">
            <motion.div
              className="reward-reveal__stamp stamp"
              initial={reduceMotion ? false : { scale: 2.2, opacity: 0, rotate: -18 }}
              animate={{ scale: 1, opacity: 1, rotate: -8 }}
              transition={{ type: 'spring', stiffness: 420, damping: 16 }}
            >
              INTO THE LOCKER
            </motion.div>
            <Link
              to="/profile?tab=locker"
              className="btn btn-pink btn-block reward-reveal__locker-cta"
              aria-label="Open your locker"
            >
              Open locker
            </Link>
          </div>
        )}
      </motion.div>

      {verifiedUnlocked && (
        <motion.p className="reward-reveal__verified" variants={childVariants}>
          Verified. The floor finally admits you exist.
        </motion.p>
      )}

      <motion.div
        className="reward-reveal__tagline tagline"
        variants={childVariants}
        aria-hidden
      >
        {theme.copy.rewardTagline}
      </motion.div>
    </motion.section>
  );
}
