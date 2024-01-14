import './JobDetails.css'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const JobDetails = ({ jobs, toggleFavorite, favorites }) => {
   const { jobId } = useParams()
   const job = jobs.find(element => element.id.toString() === jobId)
   
   console.log(jobs, "this is jobs in job details")

   if (!job) {
      return <div>Job not found or still loading...</div>;
   }

   const isFavorited = favorites.includes(job.id)

   return (
      <section className='job-detail-container'>
         <div key={job.index} className='job-details'>
         <div className='button-box'>
            <button className="fave-button" onClick={() => toggleFavorite(job.id) } >{isFavorited ? 'Remove from Favorites' : '✨Add to Favorites✨'}</button>
         </div>
            <p>Company: {job.companyName}</p>
            <p>Job Title: {job.jobTitle}</p>
            <p>Level: {job.jobLevel}</p>
            <p>Job Type: {job.jobType}</p>
            <p>Location: {job.jobGeo}</p>
         <div className="job-category">
            <p>Job Category:<span>&nbsp;</span></p>
            <p dangerouslySetInnerHTML={{ __html: job.jobCategory}}></p>
         </div>
            <p dangerouslySetInnerHTML={{ __html: job.jobDescription }}></p>
            <p>Job posted: {moment(job.pubDate).format('MMMM Do, YYYY')}</p>
         </div>
      </section>
    );
}

JobDetails.propTypes = {
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
   })).isRequired,
   toggleFavorite: PropTypes.func.isRequired,
   favorites: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

export default JobDetails