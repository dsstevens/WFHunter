import './HomeButton.css'
import { Link, useLocation } from "react-router-dom"

const HomeButton = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return(
    <>
      {isHomePage ? null : <Link className="header-button" to="/">Home</Link>}
    </>
   
  )
}

export default HomeButton