import type { Route } from "../types/common"
import {
  HomeOutlined,
  PushpinOutlined,
  TrophyOutlined,
  ProductOutlined,
  BarChartOutlined
} from '@ant-design/icons';

export const getHomePage = () => '/home'
export const getDutyPage = () => '/duty'
export const getAchievePage = () => '/achieve'
export const getSettingsPage = () => '/settings'
export const getSelectionPage = () => '/selection'
export const getFractionsPage = () => '/fractions'

export const getDutyOfUserPage = (userId: string) => `${getDutyPage()}/${userId}`
export const getAchieveOfUserPage = (userId: string) => `${getAchievePage()}/${userId}`  
export const getPersonDetailsPage = (userId: string) => `/persons/${userId}`


export const routesMap:Record<string, Omit<Route, 'path'>> = {
  [getHomePage()]: {id: 1, label: 'Esasy', icon: <HomeOutlined/>},
  [getDutyPage()]: {id: 2, label: 'Tabşyryk', icon: <PushpinOutlined/>},
  [getAchievePage()]: {id: 3, label: 'Höweslendirmeler', icon: <TrophyOutlined/>},
  [getSelectionPage()]: {id: 4, label: 'Seljerme', icon: <BarChartOutlined/>},
  [getFractionsPage()]: {id: 5, label: 'Bölümçeler', icon: <ProductOutlined />},
}

export const routes: Array<Route> = Object.entries(routesMap).map(([routePath,data]) => ({
  ...data,
  path: routePath
}))