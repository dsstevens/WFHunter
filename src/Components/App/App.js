import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomeButton from '../HomeButton/HomeButton'
import Home from '../Home/Home'



function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'


  return (
    <main className='App'>
      <Header isHomePage={isHomePage}>
        {isHomePage ? null : <HomeButton />}
      </Header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
    
  );
}

export default App;
