import Home from '../Home/Home'
import './HomeButton.css'
import { Link, useLocation } from "react-router-dom"

const HomeButton = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return(
    <>
      {isHomePage ? null : <Link className="header-button" to="/">Home</Link>}
      {/* <button>Home</button> */}
    </>
   
  )
}

export default HomeButton