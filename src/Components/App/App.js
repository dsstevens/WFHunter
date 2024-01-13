import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import HomeButton from '../HomeButton/HomeButton'
import Home from '../Home/Home'
import Faves from '../Faves/Faves'
import JobDetails from '../JobDetails/JobDetails'
import ErrorPage from '../ErrorPage/ErrorPage'
import fetchAPI from '../../ApiCalls';
import { useState, useEffect } from 'react';


const App = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [jobs, setJobs] = useState([])
 
  useEffect(() => {
    fetchAPI()
      .then((data) => {
        // console.log(data, "in first then")
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
    <div className='App'>
      <Header>
        <HomeButton />
      </Header>
      <Routes>
        <Route path='/' element={<Home jobs={ jobs }/> } />
        <Route path='/favorites' element={<Faves />} />
        <Route path='/details/:jobId' element={<JobDetails jobs={ jobs } />} />
      <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
