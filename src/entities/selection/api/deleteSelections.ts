import type { DBType } from "@shared/config/dbConfig"
import type { Selection } from "../model/types"

type Options = {
  db: DBType
  selectionsIds: Array<Selection['id']>
}

export const deleteSelections = async ({
  db,
  selectionsIds,
}: Options) => await db.selections.bulkDelete(selectionsIds)
