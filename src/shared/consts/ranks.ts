import type { DefaultListElement, PositionTypes, RanksRecord } from "../types/common"

export const ranks: RanksRecord<DefaultListElement & {positionType: PositionTypes}> = {
  'hcy': {id: 1, label: 'hatarçy', positionType: 'cb'},
  'k_snt': {id: 2, label: 'kiçi seržant', positionType: 'cb'},
  'snt': {id: 3, label: 'seržant', positionType: 'cb'},
  'u_snt': {id: 4, label: 'uly seržant', positionType: 'cb'},
  'bg_k_snt': {id: 5, label: 'b/g kiçi seržant', positionType: 'bg'},
  'bg_snt': {id: 6, label: 'b/g seržant', positionType: 'bg'},
  'bg_u_snt': {id: 7, label: 'b/g uly seržant', positionType: 'bg'},
  'bg_sna': {id: 8, label: 'b/g starşina', positionType: 'bg'},
  'lnt': {id: 9, label: 'leýtenant', positionType: 'bg'},
  'u_lnt': {id: 10, label: 'uly leýtenant', positionType: 'bg'},
  'kn': {id: 1, label: 'kapitan', positionType: 'bg'},
  'mr': {id: 1, label: 'maýor', positionType: 'bg'},
  'ppk': {id: 1, label: 'podpolkownik', positionType: 'bg'},
  'pk': {id: 1, label: 'polkownik', positionType: 'bg'},
}

export const ranksArray = Object.entries(ranks).map(([_, value]) => ({...value, value: _}))


