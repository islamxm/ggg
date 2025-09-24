import { Table, Button, Space, Tooltip } from "antd"
import type { FC } from "react"
import {
  InfoCircleOutlined,
  PushpinOutlined,
  TrophyOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { useNavigate } from "react-router"
import { getAchieveOfUserPage, getDutyOfUserPage, getPersonDetails } from "@shared/config/routeConfig"
import { useSelector } from "@shared/hooks/useReduxStore"
import type { TablePersonDataType } from "../../model/types"
import {personsMap} from '../../lib/personsMap'

const { Column } = Table

export const PersonsTable: FC = () => {
  const navigate = useNavigate()
  const {persons} = useSelector(s => s.personsReducer)

  return (
    <Table<TablePersonDataType> dataSource={persons.map(personsMap)} pagination={false} style={{width: '100%'}}>
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