import { achieves, type Achieve } from "@entities/achieve";
import { AchieveDayTag } from "@entities/achieve/ui/AchieveDayTag/AchieveDayTag";
import { Flex, type CalendarProps } from "antd";
import dayjs, { Dayjs } from 'dayjs'

export const useAchieveCalendar = (data: Array<Achieve>) => {
  const dateCellRender = (value: Dayjs) => {
    const date = dayjs(value).format('DD.MM.YYYY')
    const dayAchieves = data.filter(d => dayjs(d.date).format('DD.MM.YYYY') === date)
    if (dayAchieves.length === 0) return null
    return (
      <Flex gap={2} vertical >
        {
          dayAchieves.map(duty => (
            <AchieveDayTag label={achieves[duty.achieveType].label} color={achieves[duty.achieveType].color}/>
          ))
        }
      </Flex>
    )
  }

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    switch (info.type) {
      case 'date':
        return dateCellRender(current)
      // case 'month':
        // return monthCellRender(current)
      default:
        return null
    }
  }

  return {
    cellRender
  }
}