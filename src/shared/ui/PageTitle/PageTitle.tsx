import { Space, Tooltip, Typography } from "antd"
import type { FC, PropsWithChildren, ReactNode } from "react"
import {QuestionCircleOutlined} from '@ant-design/icons'
import {gold} from '@ant-design/colors'


type Props = PropsWithChildren & {
  hintContent?: ReactNode
}

export const PageTitle: FC<Props> = ({
  children,
  hintContent
}) => {
  return (
    <Space align={'center'}>
      <Typography.Title style={{margin: 0}}>
        {children}
      </Typography.Title>
      <Tooltip
        title={hintContent}
        placement={'bottomRight'}
        >
        <QuestionCircleOutlined style={{color: gold[6]}}/>
      </Tooltip>

    </Space>

  )
}