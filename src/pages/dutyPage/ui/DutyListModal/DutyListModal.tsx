import { dangerBtnDefProps } from "@shared/config/dangerBtnDefProps"
import { successBtnDefProps } from "@shared/config/successBtnDefProps"
import { Modal, Button, type ModalFuncProps, Flex, Row, Col, Typography, Select } from "antd"
import { useState, type FC } from "react"
import { dutiesArray } from "@shared/consts/duties"
import type { Duties } from "@shared/types/common"

type Props = ModalFuncProps & {
  onAddDuty?: (duties: Array<Duties>) => void
}

export const DutyListModal: FC<Props> = ({
  onAddDuty,
  ...restProps
}) => {
  const [selected, setSelected] = useState<Array<Duties>>([])

  const onCancel = () => {
    setSelected([])
    restProps?.onCancel?.()
  }

  const onSave = () => {
    onAddDuty?.(selected)
    onCancel()
  }


  return (
    <Modal
      {...restProps}
      onCancel={onCancel}
      footer={null}
    >
      <Flex gap={20} vertical>
        <Typography.Title level={5}>
          Tabşyrygy saýla
        </Typography.Title>
        <Select
          mode="multiple"
          showSearch
          optionFilterProp="label"
          placeholder='Tabşyrygy saýla'
          options={dutiesArray.map(duty => ({label: duty.label, value: duty.value}))}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          value={selected}
          onChange={e => setSelected(e)}
          />
        <Col span={24}>
          <Row gutter={10}>
            <Col span={12}><Button onClick={onSave} {...successBtnDefProps}>Ýatda sakla</Button></Col>
            <Col span={12}><Button onClick={onCancel} {...dangerBtnDefProps}>Bes et</Button></Col>
          </Row>
        </Col>
      </Flex>
    </Modal>
  )
}