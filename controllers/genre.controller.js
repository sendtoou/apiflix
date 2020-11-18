const Genre = require('../models/genre.model')
const Serie = require('../models/serie.model')

module.exports = {
  getAll: async(req, res, next) => {
    try {
      const genre = await Genre.find({})//.populate('filmography')
      res.status(200).json(genre
        )
    } catch(err) {
      next(err)
    }
  },
  getById: async(req, res, next) => {
    try {
      const { genreId } = req.params
      const genre = await Genre.findById(genreId)
      res.status(200).json(genre)
    } catch(e) {
      return this.res.status(401).json({ message: 'Unable to get by id' + e})
    }
  },
  create: async(req, res, next) => {
    try {
      const newGenre = new Genre(req.body)
      const genre = await newGenre.save()
      res.status(201).json(genre)
    } catch(err) {
      next(err)
    }
  }

}