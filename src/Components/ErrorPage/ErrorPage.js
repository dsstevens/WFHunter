import './ErrorPage.css'

const ErrorPage = ({error}) => {
  const errorMessage =
    error?.message || 'Oops! An error occurred. Please try again :('
  return (
    <div className='error-page'>
      <h3 className='error-msg'>{errorMessage}</h3>
    </div>
  )
}

export default ErrorPage