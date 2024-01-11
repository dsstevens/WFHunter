import './JobsContainer.css'
import { Link } from "react-router-dom"

const JobsContainer = ({jobs}) => {
  console.log(jobs, "this is jobs in jobscontainer", jobs[0])

  const displayJobsArray = () => {
   return (jobs.map((job) => { 
      return (
        <Link to={job.id}>
          <h2>{job.Title}</h2>
          <h3>{job.pubDate}</h3>
        </Link>
      )
    })
  )}

  return(
   <>{displayJobsArray()}</>

  )
 }

 export default JobsContainer