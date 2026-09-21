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

/** Satirical paperwork about the company; these lines impose no game requirements. */
export const PIP_ACTION_ITEMS: string[] = [
  "Complete the incident form. The box marked OTHER is smaller than the box marked USER ERROR.",
  "Request a replacement chair for the recovery area. The request form is on the broken chair.",
  "Ask People Ops why the first-aid cupboard contains three motivational mugs.",
  "Review the training poster. Its author has never entered a bout.",
  "Record equipment damage. Facilities would prefer a flattering photograph.",
  "Locate the recovery room. The sign was removed to improve navigation.",
  "Check whether the complimentary water still requires a purchase.",
  "Request combat advice from the supervisor. Expect a link to this form.",
  "File one copy here. The second copy is for the department that lost the first.",
  "Complete the wellness survey. The only available answer is SATISFIED.",
  "Ask for the promised safety demonstration. Scheduling has marked it as theoretical.",
  "Report the loose floor tile. It has already won Employee of the Month.",
  "Collect the free bandage shown in the brochure. The brochure is available for collection.",
  "Read the company recovery policy. Page two refers you back to page one.",
  "Return this form in the supplied envelope. Procurement is still sourcing the envelope.",
  "Ask why the emergency bell has a volume limit.",
  "Inspect the staff suggestion box. Its bottom opens directly into the recycling.",
  "Confirm the training video has subtitles. The subtitles say WATCH THE VIDEO.",
  "Request an appointment with the safety officer. The appointment is with an empty desk.",
  "Check the recovery bench for wet paint. The warning sign arrived yesterday.",
  "Keep a copy of your complaint. The company has an excellent record of losing them.",
  "Review the map to Medical. The map is currently displayed inside Medical.",
  "Ask Accounts why it billed the first-aid cupboard for occupying floor space.",
  "Read the fire-exit notice. The arrow points at a framed award."
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
        FILED
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
          <span>Opponent</span>
          <strong className="defeat-reveal__creature-name">{creatureName}</strong>
        </div>
        <div className="defeat-reveal__meta-row">
          <span>Outcome</span>
          <strong>FIGHT LOST</strong>
        </div>
      </motion.div>

      <motion.div className="defeat-reveal__actions" variants={childVariants}>
        <h3 className="defeat-reveal__actions-heading">From the People Ops handbook</h3>
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
        The fight is over. Rest and check your gear before your next match. This paperwork requires no action.
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
