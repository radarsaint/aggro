import { nodes as patches } from './patches';
import { nodes as dumpster_king } from './dumpster-king';
import { nodes as bleed_static } from './bleed-static';
import { nodes as proxy_bit } from './proxy-bit';
import { nodes as glasswing } from './glasswing';
import { nodes as patchwire } from './patchwire';
import { nodes as clickers } from './clickers';
import { nodes as crow_ledger } from './crow-ledger';
import { nodes as scale_crew } from './scale-crew';
import { nodes as drain_gang } from './drain-gang';
import { nodes as amber_silk } from './amber-silk';
import { nodes as veinrot } from './veinrot';
import { nodes as drool } from './drool';
import { nodes as rattlewire } from './rattlewire';
import { nodes as chrome_edge } from './chrome-edge';
import { nodes as the_choir } from './the-choir';
import { nodes as neon_howl } from './neon-howl';
import { nodes as hexhive } from './hexhive';
import { nodes as scrap_mob } from './scrap-mob';
import { nodes as marrow_gang } from './marrow-gang';
import { nodes as grin } from './grin';
import { nodes as sister_static } from './sister-static';
import { nodes as knuckle } from './knuckle';
import { nodes as pose_soft } from './pose-soft';
import { nodes as oxidize } from './oxidize';
import { nodes as iron_cadre } from './iron-cadre';
import { nodes as laugh_track } from './laugh-track';
import { nodes as silt_knives } from './silt-knives';
import { nodes as cinder_crew } from './cinder-crew';
import { nodes as sting_grid } from './sting-grid';
import { nodes as cutthroat } from './cutthroat';
import { nodes as press_ganged_dead } from './press-ganged-dead';
import { nodes as dead_mans_rig } from './dead-mans-rig';
import { nodes as deadmans_teeth } from './deadmans-teeth';
import { nodes as dead_bosun } from './dead-bosun';
import { nodes as gallows_hound } from './gallows-hound';
import { nodes as bilge_toad } from './bilge-toad';
import { nodes as drowned_powderman } from './drowned-powderman';
import { nodes as drowned_hand } from './drowned-hand';
import { nodes as powder_drake } from './powder-drake';
import { nodes as rigging_widow } from './rigging-widow';
import { nodes as gravewater_octopus } from './gravewater-octopus';
import { nodes as dead_siren } from './dead-siren';
import { nodes as mangrove_widow } from './mangrove-widow';
import type { ScriptNode } from './types';

export type { ScriptNode, CombatBanterBeat } from './types';
export { SHARED_NODES } from './shared';

export const BANTER_SCRIPTS: Record<string, ScriptNode[]> = {
  'patches': patches,
  'dumpster-king': dumpster_king,
  'bleed-static': bleed_static,
  'proxy-bit': proxy_bit,
  'glasswing': glasswing,
  'patchwire': patchwire,
  'clickers': clickers,
  'crow-ledger': crow_ledger,
  'scale-crew': scale_crew,
  'drain-gang': drain_gang,
  'amber-silk': amber_silk,
  'veinrot': veinrot,
  'drool': drool,
  'rattlewire': rattlewire,
  'chrome-edge': chrome_edge,
  'the-choir': the_choir,
  'neon-howl': neon_howl,
  'hexhive': hexhive,
  'scrap-mob': scrap_mob,
  'marrow-gang': marrow_gang,
  'grin': grin,
  'sister-static': sister_static,
  'knuckle': knuckle,
  'pose-soft': pose_soft,
  'oxidize': oxidize,
  'iron-cadre': iron_cadre,
  'laugh-track': laugh_track,
  'silt-knives': silt_knives,
  'cinder-crew': cinder_crew,
  'sting-grid': sting_grid,
  'cutthroat': cutthroat,
  'press-ganged-dead': press_ganged_dead,
  'dead-mans-rig': dead_mans_rig,
  'deadmans-teeth': deadmans_teeth,
  'dead-bosun': dead_bosun,
  'gallows-hound': gallows_hound,
  'bilge-toad': bilge_toad,
  'drowned-powderman': drowned_powderman,
  'drowned-hand': drowned_hand,
  'powder-drake': powder_drake,
  'rigging-widow': rigging_widow,
  'gravewater-octopus': gravewater_octopus,
  'dead-siren': dead_siren,
  'mangrove-widow': mangrove_widow,
};

export function scriptsFor(creatureId: string): ScriptNode[] {
  return BANTER_SCRIPTS[creatureId] ?? [];
}
