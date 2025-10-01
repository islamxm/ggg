import { BrowserRouter as BrowserRouterProvider } from "react-router"
import { ReduxProvider } from "@app/providers/redux"
import type { FC, PropsWithChildren } from "react"
import { ConfigProvider as AntConfigProvider } from "antd"

export const ProvidersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouterProvider>
      <ReduxProvider>
        <AntConfigProvider
          componentSize="large"
          >
          {children}
        </AntConfigProvider>
      </ReduxProvider>
    </BrowserRouterProvider>
  )
}
