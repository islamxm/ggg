import type { DateMode } from "@shared/types/common"
import { getDateRange } from "@shared/lib/getDateRange"
import type { DBType } from "@shared/config/dbConfig"
import { Dayjs } from "dayjs"
import type { Fraction } from "@entities/fraction/@x/selection"
import type { SelectionsOfFraction } from "@entities/selection"

type Options = {
  db: DBType
  data: {
    dateMode: DateMode | 'day'
    date: Dayjs
    fractionId: Fraction['id']
  }
}

export const getSelectionsFromFractionAndDate = async ({
  db,
  data,
}: Options): Promise<SelectionsOfFraction> => {
  const { dateMode, date, fractionId } = data
  const [start, end] = getDateRange(date, dateMode)
  let selections = await db.selections
    .where('fractionId')
    .equals(fractionId)
    .and(selection =>  selection.date >= start && selection.date <= end)
    .toArray()
  return {
    fractionId,
    selections
  }
}