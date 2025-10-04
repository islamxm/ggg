import type { Selection } from "@entities/selection/model/types"
import { dangerBtnDefProps } from "@shared/config/dangerBtnDefProps"
import { successBtnDefProps } from "@shared/config/successBtnDefProps"
import { Button, Flex } from "antd"
import type { FC } from "react"

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
      {plus > 0 && (
        <Button
          {...successBtnDefProps}
          variant={'solid'}
          // shape={'circle'}
          // size="small"
        >
          {plus}
        </Button>
      )}
      {minus > 0 && (
        <Button
          {...dangerBtnDefProps}
          variant={'solid'}
          // shape={'circle'}
          // size="small"
        >
          {minus}
        </Button>
      )}

    </Flex>
  )
}