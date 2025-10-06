import { duties, type Duties, type Duty } from "@entities/duty"
import dayjs, { Dayjs } from "dayjs"
import { DutyDayTag, DutyMonthTag } from "@entities/duty"
import { Flex, type CalendarProps } from "antd"
import type { DefaultListElement } from "@shared/types/common"

export const useDutyCalendar = (data: Array<Duty>) => {

  const dateCellRender = (value: Dayjs) => {
    const date = dayjs(value).format('DD.MM.YYYY')
    const dayDuties = data.filter(d => dayjs(d.date).format('DD.MM.YYYY') === date)
    if (dayDuties.length === 0) return null
    return (
      <Flex gap={2} vertical>
        {
          dayDuties.map(duty => (
            <DutyDayTag label={duties[duty.dutyType].label} color={duties[duty.dutyType].color} />
          ))
        }
      </Flex>
    )
  }

  const monthCellRender = (value: Dayjs) => {
    const map = new Map<Duties, DefaultListElement & { color?: string } & { dutyType: Duties }>()
    const date = dayjs(value).format('MM.YYYY')
    const targetDuties = data.filter(d => dayjs(d.date).format('MM.YYYY') === date)
    targetDuties.forEach(d => {
      map.set(d.dutyType, ({ ...duties[d.dutyType], dutyType: d.dutyType }))
    })
    const result = Array.from(map).map(([_, value]) => {
      const count = targetDuties.filter(g => g.dutyType === value.dutyType).length
      return ({
        ...value,
        count
      })
    })

    if (result.length === 0) return null

    return <DutyMonthTag data={result} />
  }

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    switch (info.type) {
      case 'date':
        return dateCellRender(current)
      case 'month':
        return monthCellRender(current)
      default:
        return null
    }
  }

  return {
    cellRender
  }
}