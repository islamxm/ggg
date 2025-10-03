import { Routes, Route } from "react-router";
import { PageLayout } from '@app/layouts/pageLayout'
import { getAchieveOfUserPage, getAchievePage, getDutyOfUserPage, getDutyPage, getFractionsPage, getHomePage, getPersonDetailsPage, getSelectionPage, getSettingsPage } from './shared/config/routeConfig';
import { ProvidersLayout } from "@app/layouts/providersLayout";

//PAGES
import { HomePage } from '@pages/homePage';
import { SettingsPage } from '@pages/settingsPage';
import { DutyPage } from '@pages/dutyPage';
import { AchievePage } from '@pages/achievePage';
import { PersonDetailsPage } from '@pages/personDetailsPage'
import { DutyDetailsPage } from "@pages/dutyDetailsPage";
import { SelectionPage } from "@pages/selectionPage";
import { FractionPage } from "@pages/fractionPage";


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
