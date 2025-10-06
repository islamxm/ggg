import type { DefaultListElement } from "@shared/types/common";

export type FractionBase = DefaultListElement 

export type Fraction = FractionBase & {
  shortLabel: string,
}
