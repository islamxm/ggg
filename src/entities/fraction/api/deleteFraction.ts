import type { DBType } from "@shared/config/dbConfig"
import type { Fraction } from "../model/types"

type Options = {
  db: DBType
  fractionId: Fraction['id']
}

export const deleteFraction = async ({
  db,
  fractionId,
}: Options) => await db.fractions.delete(fractionId)
