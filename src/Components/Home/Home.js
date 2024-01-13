import './Home.css'
import JobsContainer from '../JobsContainer/JobsContainer'



const Home = ({ jobs }) => {
console.log(jobs, "jobs in home")
  return (
    <main className="Home">
      <h2 className='home-title'>Newest remote job postings</h2>
      <section className='main-overlay'>
        <JobsContainer jobs={ jobs }></JobsContainer>
      </section>
    </main>
  )
}

export default Home
