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
} from '../data/equipment';
import { KIOSK_STOCK } from '../data/rewards';
import { RestBeat } from '../components/RestBeat';
import { useGame } from '../utils/GameContext';
import { THEME_LIST, getTheme } from '../themes';

export function Profile() {
  const {
    state,
    setHunter,
    resetAll,
    reshuffleDeck,
    setActiveThemeId,
    sellInventoryItem,
    buyKioskItem,
    equipItem,
    unequipSlot,
    longRest,
    shortRest,
  } = useGame();
  const activeTheme = getTheme(state.activeThemeId);
  const h = state.hunter;
  const toVerify = Math.max(0, 3 - h.fightsCompleted);
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

  return (
    <div>
      <div className="header-bar">
        <div className="logo-aggro" style={{ fontSize: '1.4rem' }}>
          AGGR<span className="heart-o">O</span>
        </div>
        <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{activeTheme.meta.displayName}</span>
      </div>
      <div className="page">
        <div className="card card-pink hunter-hero">
          <div className="hunter-hero__face">
            <HunterFace hunter={h} size="lg" shape="circle" title={h.displayName} />
          </div>
          <div className="hunter-hero__name-row">
            <h1 className="hunter-hero__name">{h.displayName || 'UNNAMED HUNTER'}</h1>
            {h.verified ? (
              <span className="verified-badge verified-badge--solid" title="3 fights completed">
                <span className="verified-badge__mark" aria-hidden>
                  ✓
                </span>
                VERIFIED
              </span>
            ) : (
              <span className="verified-badge verified-badge--pending" title={`${toVerify} fights to verify`}>
                UNVERIFIED
              </span>
            )}
          </div>
          <p className="hunter-hero__bio">{h.bio || 'No bio on file. Baatorasaka HR will invent one.'}</p>
          <div className="hunter-hero__stats">
            <div className="hunter-hero__stat hunter-hero__stat--gold">
              <div className="hunter-hero__stat-value gold-shimmer">{h.gold}</div>
              <div className="hunter-hero__stat-label">GOLD</div>
            </div>
            <div className="hunter-hero__stat">
              <div className="hunter-hero__stat-value">{h.fightsCompleted}</div>
              <div className="hunter-hero__stat-label">FIGHTS</div>
            </div>
            <div className="hunter-hero__stat">
              <div className="hunter-hero__stat-value">{toVerify}</div>
              <div className="hunter-hero__stat-label">TO VERIFY</div>
            </div>
          </div>
          {!h.verified ? (
            <p className="hunter-hero__note">
              Every hunter starts UNVERIFIED. Complete 3 AGGRO fights for Dating Ops clearance — floor
              reputation on file. Combat numbers stay whatever you typed; the stamp is the perk.
            </p>
          ) : (
            <p className="hunter-hero__note hunter-hero__note--verified">
              ✓ Verified — Dating Ops clearance. Floor reputation is live. Your typed HP / AC / attack stay
              as-is; clearance credit stacks when you stamp vouchers.
            </p>
          )}
        </div>

        <h3 style={{ margin: '18px 0 8px', color: 'var(--pink)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          TONIGHT
        </h3>
        <RestBeat
          matchesTonight={state.matchesTonight ?? 0}
          shortRestsUsedTonight={state.shortRestsUsedTonight ?? 0}
          onShortRest={shortRest}
          onLongRest={longRest}
        />

        <h3 style={{ margin: '18px 0 8px', color: 'var(--pink)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          YOUR FACE
        </h3>
        <YourFaceEditor
          value={{ avatarId: h.avatarId, customAvatar: h.customAvatar, displayName: h.displayName }}
          onChange={(next) => setHunter({ avatarId: next.avatarId, customAvatar: next.customAvatar })}
        />

        <h3 style={{ margin: '18px 0 8px', color: 'var(--pink)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          COMBAT LOADOUT
        </h3>
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


        <h3 style={{ margin: '18px 0 8px', color: 'var(--pink)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          FIGHT ITEM
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: 12, lineHeight: 1.45 }}>
          Items are picked in chat when a fight starts (reply 1 / 2 / 3). Threat sets how many charges you get.
        </p>

        <h3 style={{ margin: '8px 0', color: 'var(--pink)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          FLAVOR (ROAST BAIT)
        </h3>
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

        <h3 style={{ margin: '8px 0', color: 'var(--pink)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          PREFERENCES
        </h3>
        <div className="field">
          <label>Threat</label>
          <div className="chip-row">
            {(['Any', 'Low', 'Moderate', 'High'] as const).map((t) => (
              <button
                key={t}
                type="button"
                className={`chip ${h.prefs.threat === t ? 'on' : ''}`}
                onClick={() => setHunter({ prefs: { ...h.prefs, threat: t as ThreatLevel | 'Any' } })}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="field">
          <label>Standards</label>
          {canRaiseStandards ? (
            <>
              <p style={{ color: 'var(--muted)', fontSize: '0.72rem', margin: '0 0 8px', lineHeight: 1.4 }}>
                Raise the floor on Discover — still works when Threat is Any.
              </p>
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
            </>
          ) : (
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '0.72rem',
                margin: '4px 0 0',
                lineHeight: 1.4,
                opacity: 0.75,
              }}
            >
              Clear more dates and the floor lets you raise standards.
            </p>
          )}
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
                  setHunter({ prefs: { ...h.prefs, encounter: t as EncounterSize | 'Either' } })
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

        <h3 style={{ margin: '8px 0', color: 'var(--pink)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          FLOOR THEME
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.75rem', marginBottom: 8 }}>
          Active floor: <strong style={{ color: 'var(--pink)' }}>{activeTheme.meta.displayName}</strong>. Discover only shows creatures on this floor.
        </p>
        <div className="chip-row" style={{ marginBottom: 14 }}>
          {THEME_LIST.map((t) => {
            const on = state.activeThemeId === t.meta.id;
            const stub = t.meta.id === 'comingSoon' || t.meta.selectable === false;
            const disabled = t.meta.selectable === false;
            return (
              <button
                key={t.meta.id}
                type="button"
                className={`chip ${on ? 'on' : ''} ${stub ? 'chip--stub' : ''}`}
                disabled={disabled}
                title={
                  disabled
                    ? `${t.meta.blurb} — stub floor (empty Discover). Not selectable.`
                    : t.meta.blurb
                }
                onClick={() => !disabled && setActiveThemeId(t.meta.id)}
              >
                {t.meta.displayName}
                {stub ? ' · STUB' : ''}
              </button>
            );
          })}
        </div>
        {THEME_LIST.some((t) => t.meta.selectable === false) && (
          <p style={{ color: 'var(--muted)', fontSize: '0.7rem', marginTop: -8, marginBottom: 14 }}>
            Stub floors stay locked — switching into an empty clearance rack is a Facilities violation.
          </p>
        )}

        <h3 style={{ margin: '8px 0', color: 'var(--pink)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          FLOOR KIOSK · OPEN
        </h3>
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

        <h3 style={{ margin: '18px 0 8px', color: 'var(--pink)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          INVENTORY · CLEARANCE LOCKER
        </h3>
        {!h.inventory.length ? (
          <div className="inventory-empty">
            <p className="inventory-empty__title">LOCKER CLEARED · NO ASSETS ON FILE</p>
            <p className="inventory-empty__body">
              Your clearance locker is empty. Win a fight and stamp the voucher — or buy from the kiosk
              above. Equip weapons, armor, and shields for the next fight — sell the rest for scrap gold.
            </p>
          </div>
        ) : (
          <div className="inventory-locker">
            <p className="inventory-locker__caption">
              Trophy case · {h.inventory.length} stamped item{h.inventory.length === 1 ? '' : 's'} · Equip
              gear · Sell scrap
            </p>
            <div className="equip-chips">
              {(() => {
                const weapon = findEquippedItem(h, 'weapon');
                const armor = findEquippedItem(h, 'armor');
                const shield = findEquippedItem(h, 'shield');
                return (
                  <>
                    <span className={`equip-chip ${weapon ? 'equip-chip--on' : ''}`}>
                      Weapon:{' '}
                      {weapon
                        ? `${weapon.name} (${WEAPON_ATTACK_DIE[weapon.name] ?? '?'})`
                        : 'none'}
                    </span>
                    <span className={`equip-chip ${armor ? 'equip-chip--on' : ''}`}>
                      Armor:{' '}
                      {armor
                        ? `${armor.name} (+${ARMOR_AC_BONUS[armor.name] ?? 0} AC)`
                        : 'none'}
                    </span>
                    <span className={`equip-chip ${shield ? 'equip-chip--on' : ''}`}>
                      Shield:{' '}
                      {shield
                        ? `${shield.name} (+${SHIELD_AC_BONUS[shield.name] ?? 0} AC)`
                        : 'none'}
                    </span>
                  </>
                );
              })()}
            </div>
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
                />
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button type="button" className="btn btn-outline btn-block" onClick={reshuffleDeck}>
            Reshuffle passed creatures
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-block"
            onClick={() => {
              if (confirm('Reset all AGGRO data on this device?')) resetAll();
            }}
          >
            Reset Local Save
          </button>
          <Link to="/how" className="btn btn-outline btn-block" style={{ textAlign: 'center', textDecoration: 'none' }}>
            How AGGRO Works
          </Link>
        </div>

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
