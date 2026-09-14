import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ALL_CREATURE_TYPES,
  type CreatureType,
  type EncounterSize,
  type StandardsFloor,
  type ThreatLevel,
} from '../types';
import { standardsUnlocked } from '../utils/storage';
import { CombatStatsFields } from '../components/CombatStatsFields';
import { HunterFace } from '../components/HunterFace';
import { LootCard } from '../components/LootCard';
import { YourFaceEditor } from '../components/YourFaceEditor';
import {
  ARMOR_AC_BONUS,
  SHIELD_AC_BONUS,
  WEAPON_ATTACK_DIE,
  equippedSlotOf,
  findEquippedItem,
  type EquipSlot,
} from '../data/equipment';
import { KIOSK_STOCK, isUsableInCombat } from '../data/rewards';
import { RestBeat } from '../components/RestBeat';
import { useGame } from '../utils/GameContext';
import { getTheme } from '../themes';

/** Sticky peer tabs only — Prefs is a You footer link, not equal weight. */
type HomeTab = 'you' | 'onYou' | 'locker' | 'kiosk' | 'prefs';

const HOME_TABS: { id: Exclude<HomeTab, 'prefs'>; label: string; aria: string }[] = [
  { id: 'you', label: 'You', aria: 'You — face, bio, night' },
  { id: 'onYou', label: 'On you', aria: 'On you — equipped gear' },
  { id: 'locker', label: 'Locker', aria: 'Locker — inventory, sell, equip' },
  { id: 'kiosk', label: 'Kiosk', aria: 'Kiosk — floor buys' },
];

function EquippedSlotRow({
  slot,
  label,
  itemName,
  detail,
  emptyJoke,
  onUnequip,
}: {
  slot: EquipSlot;
  label: string;
  itemName: string | null;
  detail: string | null;
  emptyJoke: string;
  onUnequip: (slot: EquipSlot) => void;
}) {
  const on = Boolean(itemName);
  return (
    <div className={`on-you-slot${on ? ' on-you-slot--on' : ''}`}>
      <div className="on-you-slot__meta">
        <div className="on-you-slot__label">{label}</div>
        <div className="on-you-slot__name">{itemName ?? emptyJoke}</div>
        {detail && <div className="on-you-slot__detail">{detail}</div>}
      </div>
      {on && (
        <button
          type="button"
          className="btn btn-outline on-you-slot__unequip"
          onClick={() => onUnequip(slot)}
          aria-label={`Unequip ${itemName}`}
        >
          Unequip
        </button>
      )}
    </div>
  );
}

export function Profile() {
  const {
    state,
    setHunter,
    resetAll,
    reshuffleDeck,
    sellInventoryItem,
    buyKioskItem,
    equipItem,
    unequipSlot,
    longRest,
    shortRest,
  } = useGame();
  const activeTheme = getTheme(state.activeThemeId);
  const h = state.hunter;
  const weapon = findEquippedItem(h, 'weapon');
  const armor = findEquippedItem(h, 'armor');
  const shield = findEquippedItem(h, 'shield');
  const hasWorn = Boolean(weapon || armor || shield);
  const [tab, setTab] = useState<HomeTab>(hasWorn ? 'onYou' : 'locker');
  const [sheetOpen, setSheetOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [standardsOpen, setStandardsOpen] = useState(false);
  const canRaiseStandards = standardsUnlocked(h.fightsCompleted);
  const standards: StandardsFloor = h.prefs.standards ?? 'open';
  const setStandards = (next: StandardsFloor) => {
    if (!canRaiseStandards) return;
    setHunter({ prefs: { ...h.prefs, standards: next } });
  };
  const toggleType = (t: CreatureType) => {
    const cur = h.prefs.creatureTypes;
    const next = cur.includes(t)
      ? cur.length === 1
        ? cur
        : cur.filter((x) => x !== t)
      : [...cur, t];
    setHunter({ prefs: { ...h.prefs, creatureTypes: next } });
  };

  const healCount = h.inventory.filter((i) => isUsableInCombat(i)).length;

  return (
    <div>
      <div className="header-bar">
        <div className="logo-aggro" style={{ fontSize: '1.4rem' }}>
          AGGR<span className="heart-o">O</span>
        </div>
        <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{activeTheme.meta.displayName}</span>
      </div>
      <div className="page character-home">
        <nav className="home-tabs" aria-label="Character home">
          {HOME_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`home-tabs__tab${tab === t.id ? ' home-tabs__tab--on' : ''}`}
              aria-label={t.aria}
              aria-current={tab === t.id ? 'page' : undefined}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {tab === 'you' && (
          <section className="home-panel" aria-label="You">
            <div className="card card-pink hunter-hero">
              <div className="hunter-hero__face">
                <HunterFace hunter={h} size="lg" shape="circle" title={h.displayName} />
              </div>
              <div className="hunter-hero__name-row">
                <h1 className="hunter-hero__name">{h.displayName || 'UNNAMED HUNTER'}</h1>
                {h.verified ? (
                  <span className="verified-badge verified-badge--solid" title="Verified">
                    <span className="verified-badge__mark" aria-hidden>
                      ✓
                    </span>
                    VERIFIED
                  </span>
                ) : (
                  <span className="verified-badge verified-badge--pending">UNVERIFIED</span>
                )}
              </div>
              <p className="hunter-hero__bio">{h.bio || 'No bio on file. Baatorasaka HR will invent one.'}</p>
              <div className="hunter-hero__stats hunter-hero__stats--thin">
                <div className="hunter-hero__stat hunter-hero__stat--gold">
                  <div className="hunter-hero__stat-value gold-shimmer">{h.gold}</div>
                  <div className="hunter-hero__stat-label">GOLD</div>
                </div>
              </div>
              {h.verified ? (
                <p className="hunter-hero__note hunter-hero__note--verified">
                  ✓ Verified — Dating Ops knows your face.
                </p>
              ) : (
                <p className="hunter-hero__note">Still soft. Three clears and they stamp you.</p>
              )}
            </div>

            <h3 className="home-section-label">TONIGHT</h3>
            <RestBeat
              matchesTonight={state.matchesTonight ?? 0}
              shortRestsUsedTonight={state.shortRestsUsedTonight ?? 0}
              onShortRest={shortRest}
              onLongRest={longRest}
            />

            <h3 className="home-section-label">YOUR FACE</h3>
            <YourFaceEditor
              value={{ avatarId: h.avatarId, customAvatar: h.customAvatar, displayName: h.displayName }}
              onChange={(next) => setHunter({ avatarId: next.avatarId, customAvatar: next.customAvatar })}
            />

            <h3 className="home-section-label">FLAVOR (ROAST BAIT)</h3>
            <div className="field">
              <label>Age</label>
              <input value={h.age || ''} onChange={(e) => setHunter({ age: e.target.value })} />
            </div>
            <div className="field">
              <label>Job</label>
              <input value={h.job || ''} onChange={(e) => setHunter({ job: e.target.value })} />
            </div>
            <div className="field">
              <label>Bio</label>
              <textarea value={h.bio} onChange={(e) => setHunter({ bio: e.target.value })} maxLength={160} />
            </div>
            <div className="field">
              <label>Display name</label>
              <input
                value={h.displayName || ''}
                onChange={(e) => setHunter({ displayName: e.target.value })}
                maxLength={32}
              />
            </div>

            <div className="home-disclosure">
              <button
                type="button"
                className="home-disclosure__toggle"
                aria-expanded={sheetOpen}
                onClick={() => setSheetOpen((v) => !v)}
              >
                {sheetOpen ? 'Hide your numbers' : 'Your numbers'}
              </button>
              {sheetOpen && (
                <div className="home-disclosure__body">
                  <CombatStatsFields
                    values={{
                      maxHp: h.maxHp,
                      ac: h.ac,
                      attackDie: h.attackDie,
                      attackStat: h.attackStat,
                      attackStatScore: h.attackStatScore,
                      initiativeBonus: h.initiativeBonus,
                    }}
                    onChange={(patch) => setHunter(patch)}
                    hunter={h}
                  />
                </div>
              )}
            </div>

            <button
              type="button"
              className="home-prefs-link"
              onClick={() => setTab('prefs')}
            >
              Dating prefs
            </button>
          </section>
        )}

        {tab === 'onYou' && (
          <section className="home-panel" aria-label="On you">
            <h3 className="home-section-label">ON YOU TONIGHT</h3>
            <p className="home-lede">What you&apos;re wearing into the next date. Equip from the Locker.</p>
            <div className="on-you-slots">
              <EquippedSlotRow
                slot="weapon"
                label="Weapon"
                itemName={weapon?.name ?? null}
                detail={weapon ? `Attack die ${WEAPON_ATTACK_DIE[weapon.name] ?? '?'}` : null}
                emptyJoke="Fists and bad decisions"
                onUnequip={unequipSlot}
              />
              <EquippedSlotRow
                slot="armor"
                label="Armor"
                itemName={armor?.name ?? null}
                detail={armor ? `+${ARMOR_AC_BONUS[armor.name] ?? 0} AC` : null}
                emptyJoke="Nothing on you"
                onUnequip={unequipSlot}
              />
              <EquippedSlotRow
                slot="shield"
                label="Shield"
                itemName={shield?.name ?? null}
                detail={shield ? `+${SHIELD_AC_BONUS[shield.name] ?? 0} AC` : null}
                emptyJoke="Hands free · ego exposed"
                onUnequip={unequipSlot}
              />
            </div>

            <p className="home-lede home-lede--tight">
              Fight items arm in chat when a date starts — not from here.
            </p>
            <button type="button" className="btn btn-outline btn-block" onClick={() => setTab('locker')}>
              Open locker
            </button>
          </section>
        )}

        {tab === 'locker' && (
          <section className="home-panel" aria-label="Locker">
            <h3 className="home-section-label">CLEARANCE LOCKER</h3>
            <p className="home-lede">
              Sell · Equip · Heals Use mid-fight.
              {healCount > 0
                ? ` ${healCount} heal${healCount === 1 ? '' : 's'} ready.`
                : ' No heals — kiosk if soft.'}
            </p>
            {!h.inventory.length ? (
              <div className="inventory-empty">
                <p className="inventory-empty__title">LOCKER CLEARED · NO ASSETS ON FILE</p>
                <p className="inventory-empty__body">
                  Empty locker. Win a fight and stamp the voucher — or buy from the Kiosk.
                </p>
                <button
                  type="button"
                  className="btn btn-pink btn-block"
                  style={{ marginTop: 12 }}
                  onClick={() => setTab('kiosk')}
                >
                  Open kiosk
                </button>
              </div>
            ) : (
              <div className="inventory-locker">
                <p className="inventory-locker__caption">
                  {h.inventory.length} item{h.inventory.length === 1 ? '' : 's'} · Equip · Sell · Use mid-fight
                </p>
                <div className="loot-inventory-list">
                  {h.inventory.map((i) => (
                    <LootCard
                      key={i.id}
                      item={i}
                      variant="inventory"
                      onSell={sellInventoryItem}
                      onEquip={equipItem}
                      onUnequip={unequipSlot}
                      equippedSlot={equippedSlotOf(h, i.id)}
                      usableHint={isUsableInCombat(i) ? 'Use mid-fight' : null}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {tab === 'kiosk' && (
          <section className="home-panel" aria-label="Kiosk">
            <h3 className="home-section-label">FLOOR KIOSK · OPEN</h3>
            <div className="kiosk-panel">
              <div className="kiosk-panel__header">
                <span className="kiosk-panel__title">BAATORASAKA CLEARANCE KIOSK</span>
                <span className="kiosk-panel__gold gold-shimmer">{h.gold}g on file</span>
              </div>
              <p className="kiosk-panel__note">
                Spend clearance credit here. Markup is policy. No refunds. Healing stock Uses mid-fight from
                the locker. Clearance Patch equips for +1 AC — sell scrap when you need gold.
              </p>
              <div className="kiosk-stock">
                {KIOSK_STOCK.map((sku) => {
                  const canBuy = h.gold >= sku.price;
                  return (
                    <div key={sku.id} className="kiosk-sku">
                      <div className="kiosk-sku__info">
                        <div className="kiosk-sku__name">{sku.item.name}</div>
                        <div className="kiosk-sku__meta">
                          {sku.item.kind} · {sku.price}g
                        </div>
                        <div className="kiosk-sku__blurb">{sku.blurb}</div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-pink kiosk-sku__buy"
                        disabled={!canBuy}
                        onClick={() => buyKioskItem(sku.id)}
                        aria-label={`Buy ${sku.item.name} for ${sku.price} gold`}
                      >
                        {canBuy ? `Buy · ${sku.price}g` : 'Broke'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {tab === 'prefs' && (
          <section className="home-panel" aria-label="Dating prefs">
            <button type="button" className="home-prefs-back" onClick={() => setTab('you')}>
              ← You
            </button>
            <h3 className="home-section-label">DATING PREFS</h3>
            <p className="home-lede">Utilities. Filters stay buried on purpose.</p>

            <div className="home-utils" style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button type="button" className="btn btn-outline btn-block" onClick={reshuffleDeck}>
                Reshuffle passed creatures
              </button>
              <Link
                to="/how"
                className="btn btn-outline btn-block"
                style={{ textAlign: 'center', textDecoration: 'none' }}
              >
                How AGGRO Works
              </Link>
              <button
                type="button"
                className="btn btn-ghost btn-block"
                onClick={() => {
                  if (confirm('Reset all AGGRO data on this device?')) resetAll();
                }}
              >
                Reset Local Save
              </button>
            </div>

            {canRaiseStandards && (
              <div className="home-disclosure" style={{ marginTop: 20 }}>
                <button
                  type="button"
                  className="home-disclosure__toggle"
                  aria-expanded={standardsOpen}
                  onClick={() => setStandardsOpen((v) => !v)}
                >
                  {standardsOpen ? 'Hide standards' : 'Standards'}
                </button>
                {standardsOpen && (
                  <div className="home-disclosure__body">
                    <p className="home-lede home-lede--tight">Raise the floor on Discover when Threat is Any.</p>
                    <div className="chip-row" role="group" aria-label="Dating standards">
                      {(
                        [
                          { id: 'open' as const, label: 'All dates' },
                          { id: 'skipSoft' as const, label: 'Skip the soft ones' },
                          { id: 'serious' as const, label: 'Only serious dates' },
                        ] as const
                      ).map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          className={`chip ${standards === opt.id ? 'on' : ''}`}
                          onClick={() => setStandards(opt.id)}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="home-disclosure" style={{ marginTop: 12 }}>
              <button
                type="button"
                className="home-disclosure__toggle"
                aria-expanded={filtersOpen}
                onClick={() => setFiltersOpen((v) => !v)}
              >
                {filtersOpen ? 'Hide Discover filters' : 'Discover filters'}
              </button>
              {filtersOpen && (
                <div className="home-disclosure__body">
                  <div className="field">
                    <label>Threat</label>
                    <div className="chip-row">
                      {(['Any', 'Low', 'Moderate', 'High'] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`chip ${h.prefs.threat === t ? 'on' : ''}`}
                          onClick={() =>
                            setHunter({ prefs: { ...h.prefs, threat: t as ThreatLevel | 'Any' } })
                          }
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label>Encounter</label>
                    <div className="chip-row">
                      {(['Either', 'One', 'Multiple'] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`chip ${h.prefs.encounter === t ? 'on' : ''}`}
                          onClick={() =>
                            setHunter({
                              prefs: { ...h.prefs, encounter: t as EncounterSize | 'Either' },
                            })
                          }
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label>Creature Types</label>
                    <div className="chip-row">
                      {ALL_CREATURE_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`chip ${h.prefs.creatureTypes.includes(t) ? 'on' : ''}`}
                          onClick={() => toggleType(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        <div className="warning-box">
          WARNING: AGGRO matches may lead to injury, dismemberment, irrational decisions, or death.
        </div>
        <div className="sponsor-row">
          <span className="sponsor">BLOODTECH</span>
          <span className="sponsor">MAZTEK</span>
          <span className="sponsor">SLAUGHTER HOUSE</span>
          <span className="sponsor">NECRODRINK</span>
        </div>
      </div>
    </div>
  );
}
