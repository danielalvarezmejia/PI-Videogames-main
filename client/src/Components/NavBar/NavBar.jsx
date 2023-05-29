// import logo from '../../img/Rick_Morty_Logo.png'
import { Link, useLocation } from 'react-router-dom';
// import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css'

const NavBar = () => {
  const location = useLocation()

  return (
    <div className={style.container}>
      <Link to='/home'>
        {/* <img src={logo} alt="imgLogo" className={style.logo} /> */}
      </Link>

      <div className={style.navLinks}>
        <Link to='/home'>
          <span>Home</span>
        </Link>
        <Link to='/favorites'>
          <span>Favorites</span>
        </Link>
        <Link to='/form'>
          <span>Form</span>
        </Link>
        <Link to='/about'>
          <span>About</span>
        </Link>
      </div>
      {/* <div className={style.searchBar}>
        {location.pathname === '/home' && <SearchBar onSearch={onSearch} />}
      </div> */}
    </div>
  )
}

export default NavBar