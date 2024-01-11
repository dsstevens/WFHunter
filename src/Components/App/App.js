import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomeButton from '../HomeButton/HomeButton'
import FavesButton from '../FavesButton/FavesButton';
import Home from '../Home/Home'
import Faves from '../Faves/Faves'
import JobDetails from '../JobDetails/JobDetails'
import fetchAPI from '../../ApiCalls';
import { useState, useEffect } from 'react';


const App = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [jobs, setJobs] = useState({})
 
  useEffect(() => {
    fetchAPI()
      .then((data) => {
        return data
      })
      .then((data) => {
        setJobs(data.jobs)
      })
      .catch((error) => { 
        console.log(error, "Caught error")
      });
  }, [])

  return (
    <main className='App'>
      <Header isHomePage={isHomePage}>
        {isHomePage ? null : <HomeButton />}
      </Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:favorites' element={<Faves />} />
        <Route path='/:details/:job_id' element={<JobDetails />} />
      </Routes>
    </main>
    
  );
}

export default App;
