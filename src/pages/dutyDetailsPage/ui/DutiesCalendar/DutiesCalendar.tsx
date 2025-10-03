import { Calendar, type CalendarMode } from "antd"
import classes from './classes.module.scss'
import { type FC } from "react"
import type { DutyItem } from "@entities/duty"
import { useDutyCalendar } from "@pages/dutyDetailsPage/lib/useDutyCalendar"

type Props = {
  onChange?: DefFunc
  value?: any,
  data: Array<DutyItem>
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
    <div className={classes.wrapper}>
      <Calendar
        value={value}
        onChange={e => onChange?.(e.format('MM.YYYY'))}
        mode={mode}
        onPanelChange={(_, mode) => onModeChange?.(mode)}
        cellRender={cellRender}
      />
    </div>
  )
}