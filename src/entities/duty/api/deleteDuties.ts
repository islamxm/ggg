import type { DBType } from "@shared/config/dbConfig"
import type { Duty } from "../model/types"

type Options = {
  db: DBType
  dutyIds: Array<Duty['id']>
}

export const deleteDuties = async ({
  db,
  dutyIds,
}: Options) => await db.duties.bulkDelete(dutyIds)
