import type { DefaultListElement, PositionTypes, RanksRecord } from "../types/common"

export const ranks: RanksRecord<DefaultListElement & {positionType: PositionTypes, short: string}> = {
  'hcy': {id: 1, label: 'hatarçy', positionType: 'cb', short: 'h-çy'},
  'k_snt': {id: 2, label: 'kiçi seržant', positionType: 'cb', short: 'k-snt'},
  'snt': {id: 3, label: 'seržant', positionType: 'cb', short: 'snt'},
  'u_snt': {id: 4, label: 'uly seržant', positionType: 'cb', short: 'u-snt'},
  'bg_k_snt': {id: 5, label: 'b/g kiçi seržant', positionType: 'bg', short: 'b/g k-snt'},
  'bg_snt': {id: 6, label: 'b/g seržant', positionType: 'bg', short: 'b/g snt'},
  'bg_u_snt': {id: 7, label: 'b/g uly seržant', positionType: 'bg', short: 'b/g u-snt'},
  'bg_sna': {id: 8, label: 'b/g starşina', positionType: 'bg', short: 'b/g sna'},
  'lnt': {id: 9, label: 'leýtenant', positionType: 'bg', short: 'lnt'},
  'u_lnt': {id: 10, label: 'uly leýtenant', positionType: 'bg', short: 'u-lnt'},
  'kn': {id: 1, label: 'kapitan', positionType: 'bg', short: 'k-n'},
  'mr': {id: 1, label: 'maýor', positionType: 'bg', short: 'm-r'},
  'ppk': {id: 1, label: 'podpolkownik', positionType: 'bg', short: 'p/p-k'},
  'pk': {id: 1, label: 'polkownik', positionType: 'bg', short: 'p-k'},
}

export const ranksArray = Object.entries(ranks).map(([_, value]) => ({...value, value: _}))


