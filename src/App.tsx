import { Routes, Route } from "react-router";
import { PageLayout } from '@app/layouts/pageLayout'
import { getAchieveOfUserPage, getAchievePage, getDutyOfUserPage, getDutyPage, getFractionsPage, getHomePage, getPersonDetailsPage, getSelectionPage } from './shared/config/routeConfig';
import { ProvidersLayout } from "@app/layouts/providersLayout";
import { lazy } from "react";

//PAGES
const HomePage = lazy(() => import('@pages/homePage').then(module => ({
  default: module.HomePage
})))
const AchievePage = lazy(() => import('@pages/achievePage').then(module => ({
  default: module.AchievePage
})))
const DutyPage = lazy(() => import('@pages/dutyPage').then(module => ({
  default: module.DutyPage
})))
const PersonDetailsPage = lazy(() => import('@pages/personDetailsPage').then(module => ({
  default: module.PersonDetailsPage
})))
const DutyDetailsPage = lazy(() => import('@pages/dutyDetailsPage').then(module => ({
  default: module.DutyDetailsPage
})))
const SelectionPage = lazy(() => import('@pages/selectionPage').then(module => ({
  default: module.SelectionPage
})))
const FractionPage = lazy(() => import('@pages/fractionPage').then(module => ({
  default: module.FractionPage
})))

function App() {

  return (
    <ProvidersLayout>
      <PageLayout>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path={getHomePage()} element={<HomePage />}></Route>
          <Route path={getFractionsPage()} element={<FractionPage />}></Route>
          <Route path={getDutyPage()} element={<DutyPage />}></Route>
          <Route path={getAchievePage()} element={<AchievePage />}></Route>
          <Route path={getSelectionPage()} element={<SelectionPage />}></Route>

          <Route path={getPersonDetailsPage(':id')} element={<PersonDetailsPage />}></Route>
          <Route path={getDutyOfUserPage(':id')} element={<DutyDetailsPage />}></Route>
          <Route path={getAchieveOfUserPage(':id')} element={<AchievePage />}></Route>
        </Routes>
      </PageLayout>
    </ProvidersLayout>
  )
}

export default App
