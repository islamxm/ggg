import type { DefaultListElement } from "@shared/types/common";
import type { Duties } from "./types";

export const duties: Record<Duties, DefaultListElement> = {
  'hb_nobatcy': {id: 1, label: 'Harby bölüm boýunça nobatçy'},
  'hb_komekci': {id: 2, label: 'Harby bölüm boýunça nobatçynyň kömekçisi'},
  'batalyon_nobatcy': {id: 3, label: 'Batalýon (diwizion) boýunça nobatçy'},
  'batalyon_komekci': {id: 4, label: 'Batalýon (diwizion) boýunça nobatçynyň kömekçisi'},
  'operator': {id: 5, label: 'Operator'},
  'cp_nobatcy': {id: 6, label: 'Çapar (nobatçy)'},
  'cp_gatnadyjy': {id: 7, label: 'Çapar (gatnadyjy)'},
  'bgn_nobatcy': {id: 8, label: 'BGN boýunça nobatçy'},
  'bgn_komekci': {id: 9, label: 'BGN boýunça nobatçynyň kömekçisi'},
  'rota_nobatcy': {id: 10, label: 'Rota (batareýa) boýunça nobatçy'},
  'rota_gundeci': {id: 11, label: 'Rota (batareýa) boýunça gündeçi'},
  'nn_isci': {id: 12, label: 'Naharhana işçisi'},
  'nn_nobatcy': {id: 13, label: 'Naharhana boýunça nobatçy'},
  'p_nobatcy': {id: 14, label: 'Park boýunça nobatçy'},
  'p_gundeci': {id: 15, label: 'Park boýunça gündeçi'},
  'cekiji': {id: 16, label: 'Nobatçy çekiji'},
  'ips': {id: 17, label: 'Içerki patrul serkerdesi'},
  'ip': {id: 18, label: 'Içerki patrul'},
  'gps': {id: 19, label: 'Garnizon patrul serkerdesi'},
  'gp': {id: 20, label: 'Garnizon patrul'},
  'ig_serkerde': {id: 21, label: 'Içerki garawul serkerdesi'},
  'ig_komekci': {id: 22, label: 'Içerki garawul serkerdesiniň kömekçisi'},
  'ig_calshyryjy': {id: 23, label: 'Içerki garawul çalşyryjy'},
  'ig_sakcy': {id: 24, label: 'Içerki garawul sakçy'},
  'gg_serkerde': {id: 25, label: 'Garnizon garawul serkerdesi'},
  'gg_komekci': {id: 26, label: 'Garnizon garawul serkerdesiniň kömekçisi'},
  'gg_calshyryjy': {id: 27, label: 'Garnizon garawul çalşyryjysy'},
  'gg_dc': {id: 28, label: 'Garnizon garawul daşyna çykaryjy'},
  'gg_sakcy': {id: 29, label: 'Garnizon garawul sakçy'},
  'nb_serkerde': {id: 30, label: 'Nobatçy bölümçäniň serkerdesi'},
  'nb': {id: 31, label: 'Nobatçy bölümçe'},
  'yt': {id: 32, label: 'Ýangyn topary'},
  'na': {id: 33, label: 'Nobatçy awtoulag'},
  'g_gozegci': {id: 34, label: 'Garnizon gözegçi'}
}

export const dutiesArray = Object.entries(duties).map(([_, value]) => ({...value, value: _}))