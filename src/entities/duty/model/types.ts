import type { Person } from "@entities/person/@x/duty"

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

export type DutyCreateType = {
  id: any
  duty: Duties
  person?: Person
}

export type DutyItem = {
  date: Date,
  dutyType: Duties,
}

export type Duty = {
  id: number,
  date: Date,
  dutyType: Duties,
  personId: Person['id']
}


export type DutiesData = Record<string, Array<DutyItem>>
  
export type DutiesOfPerson = {
  personId: Person['id'],
  duties: Array<Duty>
}