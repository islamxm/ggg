import { BrowserRouter as BrowserRouterProvider } from "react-router"
import { ReduxProvider } from "@app/providers/redux"
import type { FC, PropsWithChildren } from "react"

export const ProvidersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouterProvider>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </BrowserRouterProvider>
  )
}
