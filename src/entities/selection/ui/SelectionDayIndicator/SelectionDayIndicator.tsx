import type { Selection } from "@entities/selection/model/types"
import { Flex, Tag } from "antd"
import type { FC } from "react"

type Props = {
  selection?: Array<Selection>
}

export const SelectionDayIndicator: FC<Props> = ({
  selection = []
}) => {
  const plus = selection.filter(s => s.deviation === '+').length || 0
  const minus = selection.filter(s => s.deviation === '-').length || 0
  const hardMinus = selection.filter(s => s.deviation === '--').length

  const noData = plus === 0 && minus === 0 && hardMinus === 0

  if (noData) return null

  return (
    <Flex vertical>
      {plus > 0 && <Tag color={'green'}><b>{plus}</b></Tag>}
      {minus > 0 && <Tag color={'red'}><b>{minus}</b></Tag>}
      {hardMinus > 0 && <Tag color={'red-inverse'}><b>{hardMinus}</b></Tag>}
    </Flex>
  )
}