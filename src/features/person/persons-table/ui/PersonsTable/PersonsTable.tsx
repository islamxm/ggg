import { Table, Button, Space, Tooltip } from "antd"
import { type Ranks } from "@shared/types/common"
import type { FC } from "react"
import { persons } from '@shared/mock/persons'
import { ranks } from "@shared/consts/ranks"
import {
  InfoCircleOutlined,
  PushpinOutlined,
  TrophyOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { useNavigate } from "react-router"
import { getAchieveOfUserPage, getDutyOfUserPage, getPersonDetails } from "@shared/config/routeConfig"

const { Column } = Table

const mockData = persons.map(person => ({
  id: person.id,
  name: `${person.name.lastName} ${person.name.firstName}`,
  rank: ranks[person.rank].label
}))

type DataType = {
  id: number
  rank: Ranks
  name: string
}

type Props = {
  data?: Array<any>
}

export const PersonsTable: FC<Props> = ({ data = mockData }) => {
  const navigate = useNavigate()

  return (
    <Table<DataType> dataSource={data} pagination={false} style={{width: '100%'}}>
      <Column title='T/b' render={(_,__,index) => index + 1}/>
      <Column dataIndex={'rank'} title='Harby ady' />
      <Column width={'50%'} dataIndex={'name'} title='F.A.A ady' />
      <Column
        align={'end'}
        colSpan={2}
        dataIndex={'action'}
        key={'action'}
        render={(_, data) => (
          <Space>
            <Tooltip title={'Maglumat'}>
              <Button
                onClick={() => navigate(getPersonDetails(data.id.toString()))}
                variant={'outlined'}
                color={'blue'}
                icon={<InfoCircleOutlined />}
              />
            </Tooltip>
            <Tooltip title={'Tabşyryk'}>
              <Button
                onClick={() => navigate(getDutyOfUserPage(data.id.toString()))}
                variant={'outlined'}
                color={'green'}
                icon={<PushpinOutlined />}
              />
            </Tooltip>
            <Tooltip title={'Höweslendirmeler'}>
              <Button
                onClick={() => navigate(getAchieveOfUserPage(data.id.toString()))}
                variant={'outlined'}
                color={'gold'}
                icon={<TrophyOutlined />}
              />
            </Tooltip>
            <Button
              style={{ width: '100%' }}
              icon={<DeleteOutlined />}
              color={'danger'}
              variant={'solid'}>
              Poz
            </Button>
          </Space>
        )}
      />
    </Table>
  )
}