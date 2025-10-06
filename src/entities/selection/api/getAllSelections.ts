import type { DBType } from "@shared/config/dbConfig"

type Options = {
  db: DBType
}

export const getAllSelections = async ({ db }: Options) => await db.selections.toArray()
