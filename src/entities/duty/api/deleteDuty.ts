import type { DBType } from "@shared/config/dbConfig";
import type { Duty } from "../model/types";

type Options = {
  db: DBType
  dutyId: Duty['id']
}

export const deleteDuty = async ({
  db,
  dutyId,
}: Options) => await db.duties.delete(dutyId)