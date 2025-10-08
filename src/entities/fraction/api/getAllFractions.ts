import type { DBType } from "@shared/config/dbConfig";

type Options = {
  db: DBType
}

export const getAllFractions = async ({ db }: Options) => await db.fractions.toArray()
