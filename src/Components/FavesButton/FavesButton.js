import './FavesButton.css'
import { Link, useLocation } from 'react-router-dom'

const FavesButton = () => {
  const location = useLocation()
  const isFavoritesPage = location.pathname.includes('/favorites')

  return (
    isFavoritesPage ? null : <Link to="/favorites"className='header-button'>Favorites</Link>
  )
}

export default FavesButton