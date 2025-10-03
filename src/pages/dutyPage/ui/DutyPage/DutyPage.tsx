import { Flex, DatePicker, Button } from 'antd'
import { DutyItem } from '../DutyItem/DutyItem'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { PageTitle } from '@shared/ui/PageTitle'
import { DutyListModal } from '../DutyListModal/DutyListModal'
import { useDuty } from '@pages/dutyPage/lib/useDuty'


export const DutyPage = () => {
  const [open, setOpen] = useState(false)
  const {
    date,
    isLoading,
    isDisabled,
    dutyList,
    setDate,
    onAddDuty,
    onPersonSelect,
    onDeleteDuty,
    onSaveDutyList,
    onCopy,
    onCancel
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
        {
          dutyList.map(dutyItem => (
            <DutyItem
              key={dutyItem.id}
              id={dutyItem.id}
              duty={dutyItem.duty}
              person={dutyItem.person}
              onDelete={onDeleteDuty}
              onPersonSelect={onPersonSelect}
              onCopy={onCopy}
            />
          ))
        }
        <Flex justify='center' gap={10}>
          <Button
            color='danger'
            variant='filled'
            onClick={onCancel}
            >
            Bes et
          </Button>
          <Button
            onClick={() => setOpen(true)}
            color={'primary'}
            variant={'filled'}>
            <PlusOutlined />
            Tabşyrygy goş
          </Button>
          <Button
            onClick={onSaveDutyList}
            loading={isLoading}
            variant={'solid'}
            color={'green'}
            disabled={isDisabled}
          >
            Ýatda sakla
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}