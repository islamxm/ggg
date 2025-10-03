import type { DefaultListElement } from "@shared/types/common"
import { Tag } from "antd"
import type { FC } from "react"

type Props = Omit<DefaultListElement, 'id'> & {
  color?: string
}

export const DutyDayTag: FC<Props> = ({
  color,
  label
}) => {
  return (
    <Tag color={color} style={{whiteSpace: 'wrap'}}>
      {label}
    </Tag>
  )
}