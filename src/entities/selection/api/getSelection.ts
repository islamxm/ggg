import type { DBType } from "@shared/config/dbConfig"

type Options = {
  db: DBType
  selectionId: number
}

export const getSelection = async ({
  db,
  selectionId,
}: Options) => await db.selections.get(selectionId)
