const express = require('express')
const router = express.Router()

const {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie
} = require('./controller/movieController')

router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', addMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

module.exports = router;