import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { getTheme } from '../themes';
import { useGame } from '../utils/GameContext';

export interface DefeatRevealProps {
  creatureName: string;
  /** Optional seed so the PIP sticks for this match */
  matchId?: string;
}

/** Mandatory action items — Baatorasaka HR satire, fuck-you energy in paperwork form. */
export const PIP_ACTION_ITEMS: string[] = [
  'Die less on company time. Clock-out requires a pulse.',
  'Enroll in remedial clearance-aisle combat. Attendance mandatory; competence pending review.',
  'Re-submit Form 27-B: "Why I Bled During a Date." Attach limbs if recoverable.',
  'Stop being shrinkage. Inventory writes you off as a loss — expensive, embarrassing, final.',
  'Improve metrics before next swipe. People Ops has already drafted your eulogy as a footnote.',
  'Bring arms next time. Matching algorithm logged "disappointment" under Soft Skills.',
  'Cease exiting interviews mid-stab. Complete the hunt or forfeit the clearance.',
  'Bloodline placed on Performance Improvement Purgatory. Appeal window: none.',
  'Creature rated you 1★. Respond with competence, not vibes. Stars are not decorative.',
  'Date · Hunt · Consume — you failed all three. Retry is unpaid and mandatory.',
  'Unpaid overtime in the afterlife begins immediately. Benefits: experience.',
  'Show up less dead. Baatorasaka does not sponsor pity dates or corpse reimbursement.',
  'Schedule a wellness check with Facilities. They will not fix you; they will document the smell.',
  'Acknowledge receipt of this PIP with a signature or a scream. Both file the same.',
  'Your match reported "insufficient threat." Rehearse looking dangerous in a mirror HR owns.',
  'Cease romanticizing your corpse. Romance is for winners; you are a write-off with opinions.',
  'Conspiracy note (internal): Legal believes you lost on purpose. Prove them wrong or prove them right louder.',
  'Heartstring clause: someone almost liked you. That someone has been reassigned. Do better next pulse.',
  'Brutal edge: next defeat auto-routes your remains to Clearance. As-is. No returns. No flowers.',
  'Attend Mandatory Fun in the Hymnal Suite. Attendance taken in the dark. Soft skills graded in screams.',
  'Update emergency contact to "whoever still answers." Prior contact marked Declined / Lost Interest.',
  "Stop CC'ing hope on combat threads. Hope is not a stakeholder; Hope bounced.",
  'Complete microlearning: "How Not to Be the Soft Skill." Quiz is live steel. Passing score: alive.',
  'People Ops stamped REJECTED on your face. Wash carefully — ink is permanent, dignity is not.',
];

function hashSeed(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

function pickActions(seed?: string): string[] {
  const pool = [...PIP_ACTION_ITEMS];
  const h = seed ? hashSeed(seed) : Math.floor(Math.random() * 1e9);
  // deterministic shuffle-ish pick of 3
  const picked: string[] = [];
  let x = h;
  for (let i = 0; i < 3 && pool.length; i++) {
    x = (x * 1664525 + 1013904223) >>> 0;
    const idx = x % pool.length;
    picked.push(pool.splice(idx, 1)[0]);
  }
  return picked;
}

export function DefeatReveal({ creatureName, matchId }: DefeatRevealProps) {
  const theme = getTheme(useGame().state.activeThemeId);
  const reduceMotion = useReducedMotion();
  const actions = useMemo(() => pickActions(matchId), [matchId]);
  const caseId = useMemo(() => {
    const h = hashSeed(matchId ?? creatureName);
    return `PIP-${(h % 90000) + 10000}`;
  }, [matchId, creatureName]);

  const containerVariants = reduceMotion
    ? undefined
    : {
        hidden: { opacity: 0, scale: 0.92, y: 14 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: 'spring' as const,
            stiffness: 220,
            damping: 22,
            staggerChildren: 0.09,
            delayChildren: 0.05,
          },
        },
      };

  const childVariants = reduceMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring' as const, stiffness: 280, damping: 22 },
        },
      };

  return (
    <motion.section
      className="defeat-reveal"
      role="region"
      aria-label={`Personal Improvement Plan issued. Defeated by ${creatureName}.`}
      initial={reduceMotion ? false : 'hidden'}
      animate="show"
      variants={containerVariants}
    >
      <div className="defeat-reveal__veil" aria-hidden />

      <motion.div
        className="defeat-reveal__rejected stamp"
        variants={childVariants}
        initial={reduceMotion ? false : { scale: 2.4, opacity: 0, rotate: -22 }}
        animate={{ scale: 1, opacity: 1, rotate: -10 }}
        transition={{ type: 'spring', stiffness: 380, damping: 15, delay: 0.12 }}
      >
        REJECTED
      </motion.div>

      <motion.p className="defeat-reveal__dept" variants={childVariants}>
        {theme.copy.pipDeptLine ?? theme.meta.displayName.toUpperCase()}
      </motion.p>

      <motion.h2 className="defeat-reveal__title" variants={childVariants}>
        PERSONAL IMPROVEMENT PLAN
      </motion.h2>

      <motion.p className="defeat-reveal__issued" variants={childVariants}>
        <span className="defeat-reveal__pip-badge">{theme.copy.pipHeaderLabel}</span>
        <span className="defeat-reveal__case">Case {caseId}</span>
      </motion.p>

      <motion.div className="defeat-reveal__meta" variants={childVariants}>
        <div className="defeat-reveal__meta-row">
          <span>Status</span>
          <strong>DEFEATED</strong>
        </div>
        <div className="defeat-reveal__meta-row">
          <span>Supervisor</span>
          <strong className="defeat-reveal__creature-name">{creatureName}</strong>
        </div>
        <div className="defeat-reveal__meta-row">
          <span>Outcome</span>
          <strong>NEEDS IMPROVEMENT</strong>
        </div>
      </motion.div>

      <motion.div className="defeat-reveal__actions" variants={childVariants}>
        <h3 className="defeat-reveal__actions-heading">Mandatory action items</h3>
        <ol className="defeat-reveal__action-list">
          {actions.map((item, i) => (
            <li key={i}>
              <span className="defeat-reveal__check" aria-hidden>
                ☐
              </span>
              {item}
            </li>
          ))}
        </ol>
      </motion.div>

      <motion.p className="defeat-reveal__wake" variants={childVariants}>
        You wake up later. Unpaid training continues. Swipe when metrics — and your pulse — improve.
      </motion.p>

      <motion.div variants={childVariants}>
        <Link
          to="/discover"
          className="btn btn-pink defeat-reveal__cta"
          aria-label="Back to Discover"
        >
          Back to Discover
        </Link>
      </motion.div>

      <motion.div
        className="defeat-reveal__tagline tagline"
        variants={childVariants}
        aria-hidden
      >
        {theme.copy.appTagline}
      </motion.div>
    </motion.section>
  );
}
