import type { SelectionData } from "@entities/selection";
import type { DefaultListElement } from "@shared/types/common";

export type FractionBase = DefaultListElement 

export type Fraction = FractionBase & {
  shortLabel: string,
  selection: SelectionData
}

export type NewFractionData = Pick<Fraction, 'label' | 'shortLabel'>