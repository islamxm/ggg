import type { DBType } from "@shared/config/dbConfig"
import type { Fraction } from "@entities/fraction/@x/selection"

type Options = {
  db: DBType
  fractionId: Fraction['id']
}

export const getSelectionsByFractionId = async ({
  db,
  fractionId,
}: Options) => {
  return await db.selections
    .where('fractionId')
    .equals(fractionId)
    .toArray()
  
}