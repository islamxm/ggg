import { Table, Button, Space, Tooltip } from "antd"
import type { FC } from "react"
import {
  InfoCircleOutlined,
  PushpinOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import { useNavigate } from "react-router"
import { getAchieveOfUserPage, getDutyOfUserPage, getPersonDetailsPage } from "@shared/config/routeConfig"
import type { TablePersonDataType } from "../../model/types"
import { personsMap } from '../../lib/personsMap'
import { DeletePersonButtonWithConfirm } from "@features/person/delete-person"
import type { Person } from "@entities/person"
import { PersonRank } from "@entities/person/ui/PersonRank/PersonRank"
const { Column } = Table

type Props = {
  data: Array<Person>
}
export const PersonsTable: FC<Props> = ({
  data
}) => {
  const navigate = useNavigate()

  return (
    <Table<TablePersonDataType> dataSource={data.map(personsMap)} pagination={false} style={{ width: '100%' }}>
      <Column title='T/b' render={(_, __, index) => index + 1} />
      <Column 
        dataIndex={'rank'} 
        title='Harby ady'
        render={rank => (
          <PersonRank rank={rank}/>
        )} 
        />
      <Column width={'50%'} dataIndex={'name'} title='F.A.A ady' />
      <Column
        align={'end'}
        width={'30%'}
        dataIndex={'action'}
        key={'action'}
        render={(_, data) => (
          <Space>
            <Tooltip title={'Maglumat'}>
              <Button
                onClick={() => navigate(getPersonDetailsPage(data.id.toString()))}
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
            <DeletePersonButtonWithConfirm personId={data.id} />
          </Space>
        )}
      />
    </Table>
  )
}