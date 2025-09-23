import type { ReactNode } from "react"

export type DefaultListElement = {
  id: number,
  label: string
}

export type Route = DefaultListElement & {path: string, icon: ReactNode}

export type Ranks = 
'hcy' | 
'k_snt' | 
'snt' | 
'u_snt' | 
'bg_k_snt' | 
'bg_snt' | 
'bg_u_snt' | 
'bg_sna' | 
'lnt' | 
'u_lnt' | 
'kn' | 
'mr' | 
'ppk' | 
'pk'

export type RanksRecord<ValueType> = Record<Ranks, ValueType>

export type Regions = 'AG' | 'AH' | 'MR' | 'LB' | 'DZ' | 'BN'

export type RegionsRecord<ValueType> = Record<Regions, ValueType>

export type PositionTypes = 'cb' | 'bg'
