import type { DefaultListElement, Regions } from "@shared/types/common";

export const regions: Array<DefaultListElement & {value: Regions}> = [
  {id: 1, label: 'Aşgabat', value: 'AG'},
  {id: 2, label: 'Ahal', value: 'AH'},
  {id: 3, label: 'Mary', value: 'MR'},
  {id: 4, label: 'Lebap', value: 'LB'},
  {id: 5, label: 'Daşoguz', value: 'DZ'},
  {id: 6, label: 'Balkan', value: 'BN'},
]