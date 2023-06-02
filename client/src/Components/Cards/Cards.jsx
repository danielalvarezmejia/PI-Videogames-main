import Card from "../Card/Card";
import style from './Cards.module.css';
import { useSelector } from "react-redux";

const Cards = () => {

  const videoGames = useSelector(state => state.videoGames);
  // console.log('users:', users);

  return (
    <div className={style.container}>
      {
        videoGames.map(user => {
          return <Card 
            id = {user.id}
            key = {user.id}
            image = {user.background_image}
            name = {user.name}
            genres = {user.genres}
          />
        })
      }
    </div>
  )
}

export default Cards;