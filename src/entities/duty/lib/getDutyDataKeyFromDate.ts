import {Dayjs} from 'dayjs'

export const getDutyDataKeyFromDate = (date: Dayjs) => {
  return date.format('MM.YYYY')
}