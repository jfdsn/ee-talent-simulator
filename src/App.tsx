import './App.css'
import { TalentTree } from './components/TalentTree/TalentTree'
import { PointsProvider } from './context/PointsContext'

function App() {
  return (
    <>
    <PointsProvider>
      <TalentTree />
    </PointsProvider>
    </>
  )
}

export default App
