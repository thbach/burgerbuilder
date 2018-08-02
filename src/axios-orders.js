import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-55ac0.firebaseio.com/'
});

export default instance;
