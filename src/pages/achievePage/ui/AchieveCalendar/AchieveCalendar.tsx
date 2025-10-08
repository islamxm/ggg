import type { Achieve } from "@entities/achieve"
import { useAchieveCalendar } from "@pages/achievePage/lib/useAchieveCalendar"
import { Calendar, type CalendarMode } from "antd"
import type { FC } from "react"

type Props = {
  onChange?: DefFunc
  value?: any
  data: Array<Achieve>
  mode: CalendarMode
  onModeChange?: (mode: CalendarMode) => void
}

export const AchieveCalendar:FC<Props> = ({
  onChange,
  value,
  data,
  onModeChange
}) => {
  const {cellRender} = useAchieveCalendar(data)
  
  return (
    <Calendar
      value={value}
      onChange={onChange}
      mode={'month'}
      onPanelChange={(_,mode) => onModeChange?.(mode)}
      cellRender={cellRender}
      />
  )

}