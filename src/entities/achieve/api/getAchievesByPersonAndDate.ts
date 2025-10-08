import type { DateMode } from "@shared/types/common"
import { getDateRange } from "@shared/lib/getDateRange"
import type { DBType } from "@shared/config/dbConfig"
import { Dayjs } from "dayjs"
// import type { DutiesOfPerson } from "../model/types"
import type { Person } from "@entities/person"

type Options = {
  db: DBType
  data: {
    dateMode: DateMode
    date: Dayjs
    personId: Person['id']
  }
}

export const getAchievesByPersonAndDate = async ({
  db,
  data,
}: Options) => {
  const { dateMode, date, personId } = data

  const [start, end] = getDateRange(date, dateMode)
  let achieves = await db.achieves
    .where('personId')
    .equals(personId)
    .and(achieve => achieve.date >= start && achieve.date <= end)
    .toArray()
  return {
    personId,
    achieves
  }
}