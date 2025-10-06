import type { DefaultListElement } from "@shared/types/common";
import type { Duties } from "./types";
import * as colors from '@ant-design/colors'

export const duties: Record<Duties, DefaultListElement & { color?: string }> = {
  'hb_nobatcy': {
    id: 1,
    label: 'Harby bölüm boýunça nobatçy',
    color: colors.red[4]
  },
  'hb_komekci': {
    id: 2,
    label: 'Harby bölüm boýunça nobatçynyň kömekçisi',
    color: colors.red[4]
  },
  'batalyon_nobatcy': {
    id: 3,
    label: 'Batalýon (diwizion) boýunça nobatçy',
    color: colors.red[4]
  },
  'batalyon_komekci': {
    id: 4,
    label: 'Batalýon (diwizion) boýunça nobatçynyň kömekçisi',
    color: colors.red[4]
  },
  'operator': {
    id: 5,
    label: 'Operator',
    color: colors.gray[4]
  },
  'cp_nobatcy': {
    id: 6,
    label: 'Çapar (nobatçy)',
    color: colors.volcano[4]
  },
  'cp_gatnadyjy': {
    id: 7,
    label: 'Çapar (gatnadyjy)',
    color: colors.volcano[4]
  },
  'bgn_nobatcy': {
    id: 8,
    label: 'BGN boýunça nobatçy',
    color: colors.orange[4]
  },
  'bgn_komekci': {
    id: 9,
    label: 'BGN boýunça nobatçynyň kömekçisi',
    color: colors.orange[4]
  },
  'rota_nobatcy': {
    id: 10,
    label: 'Rota (batareýa) boýunça nobatçy',
    color: colors.green[4]
  },
  'rota_gundeci': {
    id: 11,
    label: 'Rota (batareýa) boýunça gündeçi',
    color: colors.green[4]
  },
  'nn_isci': {
    id: 12,
    label: 'Naharhana işçisi',
    color: colors.yellow[4]
  },
  'nn_nobatcy': {
    id: 13,
    label: 'Naharhana boýunça nobatçy',
    color: colors.yellow[4]
  },
  'p_nobatcy': {
    id: 14,
    label: 'Park boýunça nobatçy',
    color: colors.cyan[4]
  },
  'p_gundeci': {
    id: 15,
    label: 'Park boýunça gündeçi',
    color: colors.cyan[4]
  },
  'cekiji': {
    id: 16,
    label: 'Nobatçy çekiji',
    color: colors.cyan[4]
  },
  'ips': {
    id: 17,
    label: 'Içerki patrul serkerdesi',
    color: colors.lime[4]
  },
  'ip': {
    id: 18,
    label: 'Içerki patrul',
    color: colors.lime[4]
  },
  'gps': {
    id: 19,
    label: 'Garnizon patrul serkerdesi',
    color: colors.lime[4]
  },
  'gp': {
    id: 20,
    label: 'Garnizon patrul',
    color: colors.lime[4]
  },
  'ig_serkerde': {
    id: 21,
    label: 'Içerki garawul serkerdesi',
    color: colors.magenta[4]
  },
  'ig_komekci': {
    id: 22,
    label: 'Içerki garawul serkerdesiniň kömekçisi',
    color: colors.magenta[4]
  },
  'ig_calshyryjy': {
    id: 23,
    label: 'Içerki garawul çalşyryjy',
    color: colors.magenta[4]
  },
  'ig_sakcy': {
    id: 24,
    label: 'Içerki garawul sakçy',
    color: colors.magenta[4]
  },
  'gg_serkerde': {
    id: 25,
    label: 'Garnizon garawul serkerdesi',
    color: colors.purple[4]
  },
  'gg_komekci': {
    id: 26,
    label: 'Garnizon garawul serkerdesiniň kömekçisi',
    color: colors.purple[4]
  },
  'gg_calshyryjy': {
    id: 27,
    label: 'Garnizon garawul çalşyryjysy',
    color: colors.purple[4]
  },
  'gg_dc': {
    id: 28,
    label: 'Garnizon garawul daşyna çykaryjy',
    color: colors.purple[4]
  },
  'gg_sakcy': {
    id: 29,
    label: 'Garnizon garawul sakçy',
    color: colors.purple[4]
  },
  'nb_serkerde': {
    id: 30,
    label: 'Nobatçy bölümçäniň serkerdesi',
    color: colors.gold[4]
  },
  'nb': {
    id: 31,
    label: 'Nobatçy bölümçe',
    color: colors.gold[4]
  },
  'yt': {
    id: 32,
    label: 'Ýangyn topary',
    color: colors.volcano[4]
  },
  'na': {
    id: 33,
    label: 'Nobatçy awtoulag',
    color: colors.cyan[4]
  },
  'g_gozegci': {
    id: 34,
    label: 'Garnizon gözegçi',
    color: colors.blue[4]
  }
}

export const dutiesArray = Object.entries(duties).map(([_, value]) => ({ ...value, value: _ }))