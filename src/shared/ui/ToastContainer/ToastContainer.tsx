import {Toaster} from 'sonner'
import {CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled} from '@ant-design/icons'
import {green, red, blue} from '@ant-design/colors'

export const ToastContainer = () => {
  return (
    <Toaster
      icons={{
        success: <CheckCircleFilled style={{color: green[5]}}/>,
        error: <ExclamationCircleFilled style={{color: red[5]}}/>,
        info: <InfoCircleFilled style={{color: blue[5]}}/>
      }}
      visibleToasts={5}
      theme='light'
      />
  )
}