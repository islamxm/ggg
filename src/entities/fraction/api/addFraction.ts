import type { DBType } from "@shared/config/dbConfig"
import type { Fraction } from "../model/types"

type Options = {
  db: DBType
  fractionData: Pick<Fraction, 'label' | 'shortLabel'>
}

export const addFraction = async ({
  db,
  fractionData,
}: Options) => await db.fractions.add({...fractionData})
