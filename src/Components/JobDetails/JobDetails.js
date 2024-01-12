import './JobDetails.css'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const JobDetails = ({ jobs }) => {
   const { jobId } = useParams()
   const job = jobs.find(element => element.id.toString() === jobId)
   
   console.log(job, "this is job")

   if (!job) {
      return <div>Job not found or still loading...</div>;
   }

   return (
      <div key={job.index}>
        <p>Company: {job.companyName}</p>
        <p>Job Title: {job.jobTitle}</p>
        <p>Level: {job.jobLevel}</p>
        <p>Job Type: {job.jobType}</p>
        <p>Location: {job.jobGeo}</p>
        <div className="job-category">
        <p>Job Category:<span>&nbsp;</span></p>
        <div dangerouslySetInnerHTML={{ __html: job.jobCategory}}></div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: job.jobDescription }}></div>
        <p>{job.jobExcerpt}</p>
        <p>Job posted: {moment(job.pubDate).format('MMMM Do, YYYY')}</p>
      </div>
      
    );
}

export default JobDetails