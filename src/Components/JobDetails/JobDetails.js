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
        <p>{job.companyName}</p>
        <div dangerouslySetInnerHTML={{ __html: job.jobCategory}}></div>
        <div dangerouslySetInnerHTML={{ __html: job.jobDescription }}></div>
        <p>{job.jobExcerpt}</p>
        <p>{job.jobGeo}</p>
        <p>{job.jobLevel}</p>
        <p>{job.jobTitle}</p>
        <p>{job.jobType}</p>
        <p>{moment(job.pubDate).format('MMMM Do, YYYY')}</p>
      </div>
      
    );
}

export default JobDetails