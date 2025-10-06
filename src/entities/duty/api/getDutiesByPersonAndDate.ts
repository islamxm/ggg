import type { DateMode } from "@shared/types/common"
import { getDateRange } from "@shared/lib/getDateRange"
import type { DBType } from "@shared/config/dbConfig"
import { Dayjs } from "dayjs"
import type { DutiesOfPerson } from "../model/types"
import type { Person } from "@entities/person"

type Options = {
  db: DBType
  data: {
    dateMode: DateMode
    date: Dayjs
    personId: Person['id']
  }
}

export const getDutiesByPersonAndDate = async ({
  db,
  data,
}: Options): Promise<DutiesOfPerson> => {
  const { dateMode, date, personId } = data

  const [start, end] = getDateRange(date, dateMode)
  let duties = await db.duties
    .where('personId')
    .equals(personId)
    .and(duty => duty.date >= start && duty.date <= end)
    .toArray()
  return {
    personId,
    duties
  }
}