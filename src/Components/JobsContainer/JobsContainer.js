import './JobsContainer.css'
import { Link } from "react-router-dom"
import moment from 'moment'

const JobsContainer = ({jobs}) => {
  console.log(jobs, "this is jobs in jobscontainer", jobs[0])

  const displayJobsArray = () => {
   return (jobs.map((job) => { 
      return (
        <Link to={`/:details/:${job.id}`}>
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

 export default JobsContainer