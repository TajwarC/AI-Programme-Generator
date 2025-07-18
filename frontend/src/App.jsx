import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes.jsx"
import {Routes, Route} from "react-router-dom"
import {Layout} from "./layout/Layout.jsx"
import {ProgrammeGenerator} from "./programme/ProgrammeGenerator.jsx";
import {HistoryPanel} from "./history/HistoryPanel.jsx";
import {AuthenticationPage} from "./auth/AuthenticationPage.jsx"
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
