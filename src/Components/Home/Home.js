import './Home.css'
import JobsContainer from '../JobsContainer/JobsContainer'
import PropTypes from 'prop-types'

const Home = ({ jobs }) => {

  return (
    <main className="Home">
      <h2 className='home-title'>Newest remote job postings</h2>
      <section className='main-overlay'>
        <JobsContainer jobs={ jobs }></JobsContainer>
      </section>
    </main>
  )
}

Home.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    annualSalaryMax: PropTypes.string,
    annualSalaryMin: PropTypes.string,
    companyLogo: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    jobDescription: PropTypes.string.isRequired,
    jobExcerpt: PropTypes.string.isRequired,
    jobGeo: PropTypes.string.isRequired,
    jobIndustry: PropTypes.arrayOf(PropTypes.string).isRequired,
    jobLevel: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    jobType: PropTypes.arrayOf(PropTypes.string).isRequired,
    pubDate: PropTypes.string.isRequired,
    salaryCurrency: PropTypes.string,
    url: PropTypes.string.isRequired
  })).isRequired
 };
 
export default Home
