import type { DBType } from "@shared/config/dbConfig"
import type { Duty } from "../model/types"

type Options = {
  db: DBType
  duties: Array<Omit<Duty, 'id'>>
}

export const addDuties = async ({
  db,
  duties,
}: Options) => await db.duties.bulkAdd(duties)
