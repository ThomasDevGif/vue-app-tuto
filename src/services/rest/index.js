/*jshint esversion: 6 */
import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:3000/`
});
