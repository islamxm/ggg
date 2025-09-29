import {Toaster} from 'sonner'
import {CheckCircleFilled, ExclamationCircleFilled} from '@ant-design/icons'
import {green, red} from '@ant-design/colors'

export const ToastContainer = () => {
  return (
    <Toaster
      icons={{
        success: <CheckCircleFilled style={{color: green[5]}}/>,
        error: <ExclamationCircleFilled style={{color: red[5]}}/>
      }}
      />
  )
}