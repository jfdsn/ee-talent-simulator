import styled from 'styled-components'
import './App.css'
import { TalentSimulator } from './pages/TalentSimulator/TalentSimulator'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './Layout/Header'

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/talents" />} />
          <Route path='/talents' element={<TalentSimulator />}></Route>
          <Route path='/certificates' element={<></>}></Route>
        </Routes>
      </AppContainer>
    </Router>
  )
}

export default App



const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`