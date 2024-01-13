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
  const [favorites, setFavorites] = useState([])
 
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

  const toggleFavorite = (jobId) => {
    const isFavorited = favorites.some((favJobId) => favJobId === jobId);

    if (isFavorited) {
      setFavorites(favorites.filter((favJobId) => favJobId !== jobId));
    } else {
      setFavorites([...favorites, jobId]);
    }
  };

  return (
    <div className='App'>
      <Header>
        <HomeButton />
      </Header>
      <Routes>
        <Route path='/' element={<Home jobs={ jobs }/> } />
        <Route path='/favorites' element={<Faves jobs={jobs} favorites={favorites}/>} />
        <Route path='/details/:jobId' element={<JobDetails jobs={ jobs } toggleFavorite={toggleFavorite} favorites={favorites} />} />
      <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
