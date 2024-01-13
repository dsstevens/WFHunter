import JobsContainer from "../JobsContainer/JobsContainer"
import PropTypes from 'prop-types'

const Faves = ({ jobs, favorites }) => {
  const favoriteJobs = jobs.filter((job) => favorites.includes(job.id))

  return (
    <div>
      <h2>Your Favorite Job Postings</h2>
      <JobsContainer jobs={favoriteJobs} />
    </div>
  )
}

Faves.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    annualSalaryMax: PropTypes.string.isRequired,
    annualSalaryMin: PropTypes.string.isRequired,
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
    salaryCurrency: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.number).isRequired,
 };
 

export default Faves