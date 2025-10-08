import type { DBType } from "@shared/config/dbConfig";
import type { Fraction } from "@entities/fraction";

type Options = {
  db: DBType
  fractionId: Fraction['id']
}

export const getFraction = async ({
  db,
  fractionId,
}: Options) => await db.fractions.get(fractionId)

