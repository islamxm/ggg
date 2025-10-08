import type { DefaultListElement } from "@shared/types/common";
import type { Deviation } from "./types";
import * as colors from '@ant-design/colors'

export const selectionTypes:Record<Deviation, DefaultListElement & {color?: string, borderColor?: string}> = {
  '+': {
    id: 1,
    label: 'Üstünlik',
    color: colors.green[1],
    borderColor: colors.green[5]
  },
  '-': {
    id: 2,
    label: 'Kemçilik',
    color: colors.red[1],
    borderColor: colors.red[5]
  },
  '--': {
    id: 3,
    label: 'Gödek kemçilik',
    color: colors.red[3],
    borderColor: colors.red[7]
  }
}