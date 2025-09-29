import type { Person } from "@entities/person"
import { Button, Flex, Typography } from "antd"
import type { FC } from "react"
import { useNavigate } from 'react-router'

import {
  PushpinOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import { getAchieveOfUserPage, getDutyOfUserPage } from "@shared/config/routeConfig"

type Props = {
  name: Person['name']
  id: Person['id']
}

export const PersonTop: FC<Props> = ({
  name,
  id
}) => {
  const navigate = useNavigate()
  const fullName = `${name.lastName} ${name.firstName} ${name.patronymic}`

  return (
    <Flex justify={'space-between'}>
      <Typography.Title level={2}>
        {fullName}
      </Typography.Title>
      <Flex gap={10}>
        <Button
          onClick={() => navigate(getDutyOfUserPage(id.toString()))}
          size={'large'}
          variant={'filled'}
          color={'green'}
        >
          <PushpinOutlined />
          Tabşyryklar
        </Button>
        <Button
          onClick={() => navigate(getAchieveOfUserPage(id.toString()))}
          size={'large'}
          color={'gold'}
          variant={'filled'}
        >
          <TrophyOutlined />
          Höweslendirmeler
        </Button>
      </Flex>
    </Flex>
  )
}