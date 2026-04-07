import type { Person } from "@entities/person/@x/duty"

export type Duties =
  | 'hb_nobatcy' // Harby bölüm boýunça nobatçy
  | 'hb_komekci' // Harby bölüm boyunça nobatçynyň kömekçisi
  | 'batalyon_nobatcy' // Batalýon boýunça nobatçy
  | 'batalyon_komekci' // Batalýon boýunça nobatçynyň kömekçisi
  | 'operator' // Operator
  | 'cp_gatnadyjy' // Gatnadyjy
  | 'cp_nobatcy' // Dolandyryş binasynyň nobatçysy
  | 'bgn_nobatcy' // Barlag-goýberiş nokadynyň nobatçysy
  | 'bgn_komekci' // Barlag-goýberiş nokadynyň nobatçysynyň kömekçisi
  | 'rota_nobatcy' // Rota boýunça nobatçy
  | 'rota_gundeci' // Rota boýunça gündeçi
  | 'nn_isci' // Naharhana işçi
  | 'nn_nobatcy' // Naharhana nobatçy
  | 'p_nobatcy' // Park boýunça nobatçy
  | 'p_gundeci' // Park boýunça gündeçi
  | 'cekiji' // Nobatçy çekiji
  | 'ips' // Içerki patrul serkerdesi
  | 'ip' // Içerki patrul
  | 'gps' // Garnizon patrul serkerdesi
  | 'gp' // Garnizon patrul
  | 'ig_serkerde' // Içerki garawul serkerdesi
  | 'ig_komekci' // Içerki garawul serkerdesiniň kömekçisi
  | 'ig_calshyryjy' // Içerki garawul çalşyryjy
  | 'ig_sakcy' // Içerki garawul sakçy
  | 'gg_serkerde' // Garnizon garawul serkerdesi
  | 'gg_komekci' // Garnizon garawul serkerdesiniň kömekçisi
  | 'gg_calshyryjy' // Garnizon garawul çalşyryjy
  | 'gg_dc' // Garnizon garawul daşyna çykaryjy
  | 'gg_sakcy' // Garnizon garawul sakçy
  | 'g_gozegci' // Garnizon gözegçi
  | 'nb_serkerde' // Nobatçy bölümçäniň serkerdesi
  | 'nb' // Nobatçy bölümçe
  | 'yt' // Ýangyn tabşyryk
  | 'na' // Nobatçy awtoulag
  | 'nl' // Nobatçy lukman
  | 'nash' // Nobatçy aşpez
  | 'gg_n_k' // Garnizon garawullar boýunça nobatçynyň kömekçisi
  | 'gg_n' // Garnizon garawullar boýunça nobatçy
  | 'hb_gozegci' // Harby bölümiň gözegçisi
  | 'hb_gozegci_komekci' // Harby bölümiň gözegçisiniň kömekçisi
  | 'dp' // Harby bölümden daşarky patrul

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