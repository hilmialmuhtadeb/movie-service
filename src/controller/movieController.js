const pool = require('../pool');

async function getAllMovies(req, res) {
  const order = req.query.order ? req.query.order : 'ASC';
  
  pool.query(`SELECT * FROM movies ORDER BY MOVIES ${order} LIMIT 100`, (error, results) => {
    if (error) {
      throw error
    }

    const movies = results.rows.map(movie => {
      return {
        title: movie.movies,
        description: movie.one_line
      }
    })
    
    res.status(200).json({
      status: 'success',
      count: results.rows.length,
      data: movies
    })
  })
}

async function getMovieById(req, res) {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
}

async function addMovie(req, res) {
  const movie = new Movie(req.body);
  await movie.save();
  res.json(movie);
}

async function updateMovie(req, res) {
  const movie = await Movie.findByIdAndUpdate
    (req.params
      .id,
      req.body,
      { new: true }
    );
  res.json(movie);
}

async function deleteMovie(req, res) {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  res.json(movie);
}

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie
};