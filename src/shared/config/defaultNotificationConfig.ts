import { type ArgsProps } from "antd/es/notification"

export const defaultNotificationConfig = (options: Pick<ArgsProps, 'message' | 'description' | 'icon'>): ArgsProps => {
  return ({
    ...options,
    placement: 'bottomRight',
  })
}