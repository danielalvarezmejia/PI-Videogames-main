import { useParams } from 'react-router-dom';
import style from './Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetail } from '../../redux/actions/actions';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const vgById = useSelector((state) => state.detailVg);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id, dispatch]);

  return (
    <div className={style.container}>
      <div>
        <h2>{vgById.name}</h2>
        <p>{vgById.description}</p>
      </div>
      <div>
        <p>{vgById.id}</p>
        <img src={vgById.background_image} alt="character" />
      </div>
      <div>
        <span>Platforms: </span>
        <span>{vgById.platforms?.join(', ')}</span>

        <span>Released: </span>
        <span>{vgById.released}</span>

        <span>Rating: </span>
        <span>{vgById.rating}</span>

        <span>Genres: </span>
        <span>{vgById.genres?.join(', ')}</span>
      </div>
    </div>
  );
};

export default Detail;

// Cuando se le hace click a una Card deberá redirigir al detalle de ese videojuego específico

// ID.
// Nombre.
// Imagen.
// Plataformas.
// Descripción.
// Fecha de lanzamiento.
// Rating.
// Géneros.