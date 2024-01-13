import './JobsContainer.css'
import { Link } from "react-router-dom"
import moment from 'moment'
import PropTypes from 'prop-types'


const JobsContainer = ({ jobs }) => {
  console.log(jobs, "this is jobs in jobscontainer", jobs[0])

  const displayJobsArray = () => {
   return (jobs.map((job) => { 
      return (
        <Link to={`/details/${job.id}`} key={job.id}>
          <h2>{job.jobTitle}</h2>
          <h3>{moment(job.pubDate).format('MMMM Do, YYYY')}</h3>
          <h3>{job.companyName}</h3>
        </Link>
      )
    })
  )}

  return(
   <>{displayJobsArray()}</>

  )
 }

 JobsContainer.propTypes = {
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
  })).isRequired
 };
 

 export default JobsContainer