import axios from 'axios';
import { GET_USERS, GET_DETAIL, GET_GENRE, GET_NAME, POST_GAME } from './types';

export const getUsers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/videogames');
      const users = response.data;
      dispatch({ type: GET_USERS, payload: users });
    } catch (error) {
      window.alert("The Database doesn't exist")
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/videogames/${id}`);
    const userId = response.data;
    dispatch({ type: GET_DETAIL, payload: userId });
  };
};

export const postGame = () => {
  return async function (dispatch) {
    const response = await axios.post('http://localhost:3001/videogames')
    const createUser = response.data;
    dispatch({ type: POST_GAME, payload: createUser });
  };
};

export const getName = (name) => {
  return async function (dispatch) {
    try {
      let response;
      if (name === ''){
        response = await axios.get('http://localhost:3001/videogames');
      } else {
        response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
      }
      const userByName = response.data;
      dispatch({ type: GET_NAME, payload: userByName });
    } catch (error) {
      window.alert(`No existe el videojuego ${name}`)
    }
  };
};

export const getGenre = () => {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/genres');
    const userByGenre = response.data;
    dispatch({ type: GET_GENRE, payload: userByGenre });
  };
};
