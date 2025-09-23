import { ReduxProvider } from './app/providers/redux'
import { BrowserRouter, Routes, Route } from "react-router";
import { PageLayout } from '@app/layouts/pageLayout'
import { getAchievePage, getDutyPage, getHomePage, getSettingsPage } from './shared/config/routeConfig';

//PAGES
import { HomePage } from '@pages/homePage';
import { SettingsPage } from '@pages/settingsPage';
import { DutyPage } from '@pages/dutyPage';
import { AchievePage } from '@pages/achievePage';

import { db } from '@shared/config/dbConfig'
import { persons } from '@shared/mock/persons';

function App() {

  return (
    <BrowserRouter>
      <ReduxProvider>
        <PageLayout>
          <Routes>
            <Route path={getHomePage()} element={<HomePage />}></Route>
            <Route path={getSettingsPage()} element={<SettingsPage />}></Route>
            <Route path={getDutyPage()} element={<DutyPage />}></Route>
            <Route path={getAchievePage()} element={<AchievePage />}></Route>
          </Routes>
        </PageLayout>
      </ReduxProvider>
    </BrowserRouter>
  )
}

export default App
