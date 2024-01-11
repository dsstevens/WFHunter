import './Home.css'
import JobsContainer from '../JobsContainer/JobsContainer'
import { useEffect, useState } from 'react'
import fetchAPI from '../../ApiCalls'


const Home = () => {
  const [job, setJobs] = useState([])


  return (
    <main className="Home">
      <h2>Newest remote job postings</h2>
      <section className='main-overlay'>
        <JobsContainer></JobsContainer>
      </section>
    </main>
  )
}

export default Home