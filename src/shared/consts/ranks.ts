import type { DefaultListElement, RanksRecord } from "../types/common"

export const ranks: RanksRecord<DefaultListElement> = {
  'hcy': {id: 1, label: 'hatarçy'},
  'k_snt': {id: 2, label: 'kiçi seržant'},
  'snt': {id: 3, label: 'seržant'},
  'u_snt': {id: 4, label: 'uly seržant'},
  'bg_k_snt': {id: 5, label: 'b/g kiçi seržant'},
  'bg_snt': {id: 6, label: 'b/g seržant'},
  'bg_u_snt': {id: 7, label: 'b/g uly seržant'},
  'bg_sna': {id: 8, label: 'b/g starşina'},
  'lnt': {id: 9, label: 'leýtenant'},
  'u_lnt': {id: 10, label: 'uly leýtenant'},
  'kn': {id: 1, label: 'kapitan'},
  'mr': {id: 1, label: 'maýor'},
  'ppk': {id: 1, label: 'podpolkownik'},
  'pk': {id: 1, label: 'polkownik'},
}

export const ranksArray = Object.entries(ranks).map(([_, value]) => value)


