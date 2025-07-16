import ClerkProviderWithRoutes from "frontend\src\auth\ClerkProviderWithRoutes.jsx"
import {Routes, Route} from "react-router-dom"
import {Layout} from "frontend\src\layout\Layout.jsx"
import {ProgrammeGenerator} from "frontend\src\programme\ProgrammeGenerator.jsx";
import {HistoryPanel} from "frontend\src\history\HistoryPanel.jsx";
import {AuthenticationPage} from "frontend\src\auth\AuthenticationPage.jsx"
import './App.css'

function App() {
  return <ClerkProviderWithRoutes>
    <Routes>
      <Route path="/sign-in/*" element={<AuthenticationPage />} />
      <Route path="/sign-up" element={<AuthenticationPage />} />
      <Route element={<Layout />}>
        <Route path="/" element={<ProgrammeGenerator />} />
        <Route path="/" element={<HistoryPanel />} />
      </Route>
    </Routes>
  </ClerkProviderWithRoutes>

}

export default App
