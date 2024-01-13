import JobsContainer from "../JobsContainer/JobsContainer"

const Faves = ({ jobs, favorites }) => {
  const favoriteJobs = jobs.filter((job) => favorites.includes(job.id))

  return (
    <div>
      <h2>Your Favorite Job Postings</h2>
      <JobsContainer jobs={favoriteJobs} />
    </div>
  )
}

export default Faves