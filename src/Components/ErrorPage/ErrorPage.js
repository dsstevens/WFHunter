import './ErrorPage.css'
import PropTypes from 'prop-types'

const ErrorPage = ({error}) => {
  const errorMessage =
    error?.message || 'Oops! An error occurred. Please try again :('
  return (
    <div className='error-page'>
      <h3 className='error-msg'>{errorMessage}</h3>
    </div>
  )
}

ErrorPage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default ErrorPage