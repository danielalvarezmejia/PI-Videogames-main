import style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={props.image} alt="character" />
      <h2 className={style.h2}>{props.name}</h2>
      <h3 className={style.h3}>Genres</h3>
      <p className={style.p}>{props.genres.join(' - ')}</p>
    </div>
  )
}

export default Card;