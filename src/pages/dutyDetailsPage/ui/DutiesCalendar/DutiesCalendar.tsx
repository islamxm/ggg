import { Calendar, type CalendarMode } from "antd"
import { type FC } from "react"
import type { Duty } from "@entities/duty"
import { useDutyCalendar } from "@pages/dutyDetailsPage/lib/useDutyCalendar"

type Props = {
  onChange?: DefFunc
  value?: any,
  data: Array<Duty>
  mode: CalendarMode,
  onModeChange?: (mode: CalendarMode) => void
}

export const DutiesCalendar: FC<Props> = ({
  onChange,
  value,
  data,
  mode,
  onModeChange
}) => {
  const { cellRender } = useDutyCalendar(data)

  return (
    <Calendar
      value={value}
      onChange={onChange}
      mode={mode}
      onPanelChange={(_, mode) => onModeChange?.(mode)}
      cellRender={cellRender}
    />
  )
}