import { getFullName, type Person } from "@entities/person"
import { duties } from "@shared/consts/duties"
import { useSelector } from "@shared/hooks/useReduxStore"
import type { Duties } from "@shared/types/common"
import { Flex, Typography, Select, Button, Tooltip } from "antd"
import classes from './classes.module.scss'
import { PushpinFilled, DeleteOutlined, CopyOutlined } from '@ant-design/icons'
import { red } from '@ant-design/colors'
import { useEffect, useState, type FC } from "react"
import type { DutyCreateType } from "@entities/duty"

type Props = {
  id: any,
  duty: Duties
  person?: Person
  onPersonSelect?: (dutyId: any, person?: Person) => void
  onDelete?: DefFunc
  onCopy?: (data: Omit<DutyCreateType, 'id'>) => void
}

export const DutyItem: FC<Props> = ({
  id,
  duty,
  person,
  onPersonSelect,
  onDelete,
  onCopy
}) => {
  const { persons } = useSelector(s => s.personsReducer)
  const [selected, setSelected] = useState<Person['id']>()

  useEffect(() => {
    onPersonSelect?.(id, persons.find(p => p.id === selected))
  }, [selected])

  return (
    <Flex className={classes.wrapper}>
      <Flex vertical style={{ width: '100%' }}>
        <Typography.Title level={5}>
          <PushpinFilled style={{ color: red[5], marginRight: 10 }} />
          {duties[duty].label}
        </Typography.Title>
        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder='Harby gullukçyny saýla'
          optionFilterProp="label"
          options={persons.map(person => ({ label: getFullName(person.name, person.rank, true), value: person.id }))}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          onChange={setSelected}
          value={person?.id || selected}
        />
      </Flex>
        <Flex gap={5} className={classes.action}>
          <Tooltip title='Göçür'>
            <Button
              onClick={() => onCopy?.({person,duty})}
              variant={'solid'}
              shape={'circle'}
              color={'primary'}
            >
              <CopyOutlined />
            </Button>
          </Tooltip>
          <Tooltip title='Ýok et'>
            <Button
              onClick={() => onDelete?.(id)}
              variant={'solid'}
              shape={'circle'}
              color={'danger'}
            >
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </Flex>
    </Flex>
  )
}