import type { Selection } from "@entities/selection/model/types"
import { dangerBtnDefProps } from "@shared/config/dangerBtnDefProps"
import { successBtnDefProps } from "@shared/config/successBtnDefProps"
import { Button, Flex, Tag, Typography } from "antd"
import type { FC } from "react"
import { green, red } from '@ant-design/colors'

type Props = {
  selection?: Array<Selection>
}

export const SelectionDayIndicator: FC<Props> = ({
  selection = []
}) => {
  const plus = selection.filter(s => s.deviation === '+').length || 0
  const minus = selection.filter(s => s.deviation === '-').length || 0

  const noData = plus === 0 && minus === 0

  if (noData) return null

  return (
    <Flex vertical>
      {plus > 0 && <Tag color={'green'}><b>{plus}</b></Tag>}
      {minus > 0 && <Tag color={'red'}><b>{minus}</b></Tag>}
    </Flex>
  )
}