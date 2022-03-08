import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const nasaApi = Axios.create({
  baseURL: 'https://apod.nasa.gov/apod/'
})