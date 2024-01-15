import './Header.css'
import HomeButton from '../HomeButton/HomeButton'
import FavesButton from '../FavesButton/FavesButton'

const Header = () => {

  return (
    <nav>
      <HomeButton></HomeButton>
      <h1>WFHunter</h1>
      <FavesButton></FavesButton>
    </nav>
  )
}

export default Header