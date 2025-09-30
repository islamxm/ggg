import type { Person } from "@entities/person"
import { Button, Flex } from "antd"
import type { FC } from "react"
import { useNavigate } from 'react-router'
import { PersonTitle } from "@entities/person"

import {
  PushpinOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import { getAchieveOfUserPage, getDutyOfUserPage } from "@shared/config/routeConfig"

type Props = {
  name: Person['name']
  id: Person['id'],
  rank: Person['rank']
}

export const PersonTop: FC<Props> = ({
  name,
  id,
  rank
}) => {
  const navigate = useNavigate()

  return (
    <Flex justify={'space-between'}>
      <PersonTitle rank={rank} name={name}/>
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