import type { FractionBase } from "@entities/fraction/model/types"
import { Button, Flex, Typography, Card, Tooltip } from "antd"
import type { FC } from "react"
import { BarChartOutlined } from '@ant-design/icons'
import { DeleteFractionButtonWithConfirm } from "@features/fraction/delete-fraction"
import { useNavigate } from "react-router"

type Props = FractionBase

export const FractionItem: FC<Props> = ({
  id,
  label,
}) => {
  const navigate = useNavigate()

  return (
    <Card variant={'borderless'} hoverable>
      <Flex justify={'space-between'}>
        <Typography.Title level={4}>{label}</Typography.Title>
        <Flex gap={5}>
          <Tooltip
            title='Seljermesi'
            >
            <Button
              style={{ flex: '0 0 auto' }}
              // onClick={() => navigate()}
              variant={'outlined'}
              color={'magenta'}
              icon={<BarChartOutlined />}
            />
          </Tooltip>
          <DeleteFractionButtonWithConfirm fractionId={id}/>
        </Flex>
      </Flex>
    </Card>
  )
}