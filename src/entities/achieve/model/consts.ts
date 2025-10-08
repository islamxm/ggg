import type { DefaultListElement } from "@shared/types/common";
import type { Achieves } from "./types";
import * as colors from '@ant-design/colors'

export const achieves: Record<Achieves, DefaultListElement & { color?: string }> = {
  'mb': {
    id: 1,
    label: 'Minnetdarlyk bildirmek',
    color: colors.blue[3]
  },
  'sb': {
    id: 2,
    label: 'Sagbolsun yglan etmek',
    color: colors.blueDark[3]
  },
  'omh': {
    id: 3,
    label: 'Ene-atasyna minnetdarlyk haty',
    color: colors.cyan[3]
  },
  'mh': {
    id: 4,
    label: 'Minnetdarlyk haty',
    color: colors.cyanDark[3]
  },
  'hh': {
    id: 5,
    label: 'Hormat haty',
    color: colors.geekblue[3]
  },
  '50g': {
    id: 6,
    label: '50 gün garawul',
    color: colors.geekblueDark[3]
  },
  '100g': {
    id: 7,
    label: '100 gün garawul',
    color: colors.geekblueDark[3]
  },
  '150g': {
    id: 8,
    label: '150 gün garawul',
    color: colors.geekblueDark[3]
  },
  'ht1': {
    id: 9,
    label: 'Harby türgen I',
    color: colors.red[3]
  },
  'ht2': {
    id: 10,
    label: 'Harby türgen II',
    color: colors.red[3]
  },
  'ht3': {
    id: 11,
    label: 'Harby türgen III',
    color: colors.red[3]
  },
  'ge': {
    id: 12,
    label: 'Göreldeli esger',
    color: colors.greenDark[3]
  },
  'rg': {
    id: 12,
    label: 'Rugsat',
    color: colors.gray[3]
  },
}

export const achievesArray = Object.entries(achieves).map(([_, value]) => ({...value, value: _}))