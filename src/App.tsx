import styled from 'styled-components'
import './App.css'
import { TalentSimulator } from './components/TalentSimulator/TalentSimulator'

import { Header } from './Layout/Header'

function App() {
  return (
    <AppContainer>
      <TalentSimulator />
    </AppContainer>
  )
}

export default App



const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`