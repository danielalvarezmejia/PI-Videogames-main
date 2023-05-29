import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
  return (
    <div className={style.container}>
      <p className={style.p}>
        Welcome to the <br />
        Videogame API</p>
      <Link to='home'>
        <button className={style.button}>Start Exploring &rarr;</button>
      </Link>
    </div>
  )
}

export default Landing