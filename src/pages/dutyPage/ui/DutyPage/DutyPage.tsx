import { Flex, DatePicker, Button } from 'antd'
import { DutyItem } from '../DutyItem/DutyItem'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { PageTitle } from '@shared/ui/PageTitle'
import { DutyListModal } from '../DutyListModal/DutyListModal'
import { useDuty } from '@pages/dutyPage/lib/useDuty'
import { Reorder } from 'framer-motion'
import {Sortable} from '@dnd-kit/core'

export const DutyPage = () => {
  const [open, setOpen] = useState(false)
  const {
    date,
    isLoading,
    isDisabled,
    dutyList,
    setDate,
    setDutyList,
    onAddDuty,
    onPersonSelect,
    onDeleteDuty,
    onSaveDutyList,
    onReset,
    onCopy
  } = useDuty()


  return (
    <Flex gap={20} vertical>
      <DutyListModal
        open={open}
        onCancel={() => setOpen(false)}
        onAddDuty={onAddDuty} />
      <PageTitle
        hintContent={`Bu sahypada siz täze tabşyryklary döredip bilersiňiz. Gündelik tabşyrygy düzmek üçin tabşyrygyň senesini saýlamaly, soňra bolsa aşakdaky düwmeleriň kömegi bilen tabşyrygyň görnüşini we şol tabşyryga bellenýän adamy saýlamaly. Tabşyryklar düzülenden soňra "Ýatda sakla" düwmesine basmaly`}
      >Tabşyryklar</PageTitle>
      <DatePicker
        value={date}
        onChange={setDate}
        size='large'
        placeholder='Tabşyryklaryň senesini saýla'
      />
      <Flex vertical gap={10}>
        <Reorder.Group axis="y" values={dutyList} onReorder={setDutyList}>
          {
            dutyList.map(dutyItem => (
              <DutyItem
                key={dutyItem.id}
                id={dutyItem.id}
                duty={dutyItem.duty}
                person={dutyItem.person}
                onDelete={onDeleteDuty}
                onPersonSelect={onPersonSelect}
              />
            ))
          }
        </Reorder.Group>

        <Flex justify='center' gap={10}>
          <Button
            onClick={onSaveDutyList}
            loading={isLoading}
            variant={'solid'}
            color={'green'}
            disabled={isDisabled}
          >
            Ýatda sakla
          </Button>
          <Button
            onClick={() => setOpen(true)}
            size={'large'}
            color={'primary'}
            variant={'filled'}>
            <PlusOutlined />
            Tabşyrygy goş
          </Button>
        </Flex>

        
      </Flex>
    </Flex>
  )
}