import './App.css'
import { TalentToolBox } from './components/TalentToolBox/TalentToolBox'
import { TalentTree } from './components/TalentTree/TalentTree'
import { PointsProvider } from './context/PointsContext'

function App() {
  return (
    <>
    <PointsProvider>
      <TalentTree />
      <TalentToolBox />
    </PointsProvider>
    </>
  )
}

export default App
