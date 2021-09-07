const axios = require("axios");

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTZiYjUxMjZhNDM3NDdhODFhYTFmYTMwODA0MDFiMiIsInN1YiI6IjYxMmY0ODFlZmJlMzZmMDA5MjIyNGM5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3NQD8HbdX7qxQI53dwZ4vo3VA6mmwXWGk9xiUHTooO8'
    }
});

//todo ?page=2
// const discoverMovie = async (page) => await instance.get(`/discover/movie?page=${page}`)
const discoverMovie = async (page) => await instance.get(`/discover/movie?page=${page}`)
const genresMovie = async () => await instance.get(`/genre/movie/list`)

export {discoverMovie,genresMovie}