import axios from 'axios';

export const loadMyList = () => {
  return axios.get('http://localhost:3001/mylist').then(resp => resp.data)
}

export const loadRecommendations = () => {
  return axios.get('http://localhost:3001/recommendations').then(resp => resp.data)
}