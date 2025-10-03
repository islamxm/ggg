import type { DutyItem } from "@entities/duty/model/types"
import type { DefaultListElement } from "@shared/types/common"
import { Flex, Tag } from "antd"
import type { FC } from "react"

type Props = {
  data: Array<DefaultListElement & Omit<DutyItem, 'date'> & {count: number, color?: string}>
}

export const DutyMonthTag:FC<Props> = ({
  data 
}) => {

  return (
      <Flex vertical gap={2}>
        {
          data.map(d => (
            <Tag style={{ whiteSpace: 'wrap' }} color={d.color}>
              <Flex justify={'space-between'}>
                {d.label}
                <b>{d.count}</b>
              </Flex>
            </Tag>
          ))
        }
      </Flex>
  )
}