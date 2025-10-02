import { getFullName, type Person } from "@entities/person"
import { duties } from "@shared/consts/duties"
import { useSelector } from "@shared/hooks/useReduxStore"
import type { Duties } from "@shared/types/common"
import { Flex, Typography, Select, Button, Tooltip } from "antd"
import classes from './classes.module.scss'
import { PushpinFilled, DeleteOutlined, CopyOutlined, HolderOutlined } from '@ant-design/icons'
import { red } from '@ant-design/colors'
import { useEffect, useState, type FC } from "react"
import { Reorder, useDragControls } from "framer-motion"

type Props = {
  id: any,
  duty: Duties
  person?: Person
  onPersonSelect?: (dutyId: any, person?: Person) => void
  onDelete?: DefFunc
}

export const DutyItem: FC<Props> = ({
  id,
  duty,
  person,
  onPersonSelect,
  onDelete
}) => {
  const { persons } = useSelector(s => s.personsReducer)
  const controls = useDragControls()
  const [selected, setSelected] = useState<Person['id']>()

  useEffect(() => {
    onPersonSelect?.(id, persons.find(p => p.id === selected))
  }, [selected])

  return (
    <Reorder.Item
      style={{ listStyle: 'none' }}
      value={{ id, duty, person }}
      id={id}
      dragListener={false}
      dragControls={controls}
    >
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
        <div className={classes.action}>
          <Flex gap={5}>
            <Tooltip title='Göçür'>
              <Button
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
            {/* <Button
              style={{ cursor: 'grab' }}
              onPointerDown={(e) => controls.start(e)}
              variant={'filled'}
              shape={'circle'}
              color={'default'}
            >
              <HolderOutlined />
            </Button> */}
          </Flex>
        </div>

      </Flex>
    </Reorder.Item>
  )
}