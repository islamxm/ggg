import type { Selection } from "@entities/selection"
import type { DBType } from "@shared/config/dbConfig"


type Options = {
  db: DBType
  selection: Omit<Selection, 'id'>
}

export const addSelection = async ({
  db,
  selection,
}: Options) => await db.selections.add(selection)

