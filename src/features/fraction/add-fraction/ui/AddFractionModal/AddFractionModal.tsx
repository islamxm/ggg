import { Button, Col, Flex, Form, Input, Modal, Row, type ModalFuncProps } from "antd"
import { useState, type FC } from "react"
import { addFraction } from "@entities/fraction"
import { db } from "@shared/config/dbConfig"
import { useDispatch } from "@shared/hooks/useReduxStore"
import { toast } from "sonner"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import { fractionActions } from "@entities/fraction"

type Inputs = {
  label: string
  shortLabel: string
}
const requiredField = {
  rules: [{ required: true, message: 'Hökman doldurylmaly meýdan' }]
}

export const AddFractionModal: FC<ModalFuncProps> = (props) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm<Inputs>()
  const [isLoading, setIsLoading] = useState(false)

  const onCancel = () => {
    form.resetFields()
    props?.onCancel?.()
  }

  const onAddFraction = (fractionData: Inputs) => {
    setIsLoading(true)
    addFraction({
      db,
      fractionData,
    })
      .then(id => {
        toast.success('Täze bölümçe goşuldy')
        dispatch(fractionActions.add({ ...fractionData, id }))
      })
      .catch(() => {
        toast.error(ERROR_DEFAULT)
      })
      .finally(() => {
        setIsLoading(false)
        onCancel()
      })
  }

  return (
    <Modal
      {...props}
      title={'Täze bölümçäni goş'}
      footer={null}
      width={700}
    >
      <Form
        form={form}
        name="add-fraction"
        onFinish={onAddFraction}
      >
        <Flex vertical gap={10}>
          <Form.Item
            name={'label'}
            {...requiredField}
          >
            <Input
              name={'label'}
              placeholder="Bölümçäniň doly ady"
              addonBefore="Bölümçäniň doly ady"
            />
          </Form.Item>
          <Form.Item
            name={'shortLabel'}
            {...requiredField}
          >
            <Input
              placeholder="Bölümçäniň gysga ady"
              addonBefore="Bölümçäniň gysga ady"
            />
          </Form.Item>
          <Col span={24}>
            <Row gutter={[5, 5]}>
              <Col span={12}>
                <Button
                  style={{ width: '100%' }}
                  variant={'filled'}
                  color={"danger"}
                  onClick={onCancel}
                >
                  Bes et
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  htmlType="submit"
                  style={{ width: '100%' }}
                  variant="solid"
                  color={'green'}
                  loading={isLoading}
                >
                  Ýatda sakla
                </Button>
              </Col>
            </Row>
          </Col>
        </Flex>
      </Form>
    </Modal>
  )
}