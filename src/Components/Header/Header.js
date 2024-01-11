import './Header.css'
import HomeButton from '../HomeButton/HomeButton'
import FavesButton from '../FavesButton/FavesButton'

const Header = () => {


  return (
    <div>
      <HomeButton></HomeButton>
      <h1>WFHunter</h1>
      <FavesButton></FavesButton>
    </div>
  )
}

export default Header