import axios from 'axios';
import { GET_USERS } from './types';

export const getUsers = () => {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/videogames');
    const users = response.data;
    dispatch({ type: GET_USERS, payload: users });
  };
};


