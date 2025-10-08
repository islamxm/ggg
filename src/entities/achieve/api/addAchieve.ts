import type { DBType } from "@shared/config/dbConfig"
import type { Achieve } from "../model/types"


type Options = {
  db: DBType
  achieve: Omit<Achieve, 'id'>
}

export const addAchieve = async ({
  db,
  achieve,
}: Options) => await db.achieves.add(achieve)

