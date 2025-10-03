import type { CalendarMode } from "antd"
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

export type CBPeriodPart = 'I' | 'II'

export type Duties = 
 | 'hb_nobatcy'
 | 'hb_komekci' 
 | 'batalyon_nobatcy'
 | 'batalyon_komekci'
 | 'operator'
 | 'cp_gatnadyjy'
 | 'cp_nobatcy'
 | 'bgn_nobatcy'
 | 'bgn_komekci'
 | 'rota_nobatcy'
 | 'rota_gundeci'
 | 'nn_isci'
 | 'nn_nobatcy'
 | 'p_nobatcy'
 | 'p_gundeci'
 | 'cekiji'
 | 'ips'
 | 'ip'
 | 'gps'
 | 'gp'
 | 'ig_serkerde'
 | 'ig_komekci'
 | 'ig_calshyryjy'
 | 'ig_sakcy'
 | 'gg_serkerde'
 | 'gg_komekci'
 | 'gg_calshyryjy'
 | 'gg_dc'
 | 'gg_sakcy'
 | 'g_gozegci'
 | 'nb_serkerde'
 | 'nb'
 | 'yt'
 | 'na'
 

 export type CalendarModeType = CalendarMode | 'date'