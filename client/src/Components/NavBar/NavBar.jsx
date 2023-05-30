import logo from '../../img/Logo_VideoGame.png';
import { Link, useLocation } from 'react-router-dom';
import style from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  const location = useLocation()

  return (
    <div className={style.container}>
      <Link to='/home'>
        <img src={logo} alt="imgLogo" className={style.logo} />
      </Link>

      <div className={style.navLinks}>
        <Link to='/home'>
          <span>Home</span>
        </Link>
        <Link to='/detail'>
          <span>Detail</span>
        </Link>
        <Link to='/form'>
          <span>Form</span>
        </Link>
      </div>
      <div className={style.searchBar}>
        {location.pathname === '/home' && <SearchBar />}
      </div>
    </div>
  )
}

export default NavBar