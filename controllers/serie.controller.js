const Serie = require('../models/serie.model')

module.exports = {
  bodyView: (req, res, next) => {
    console.log(req.body)
    next()
  },
  getAll: async(req, res, next) => {
    try {
      const series = await Serie.find({}).populate(['genres'])
      res.status(200).json(series)
    } catch(err) {
      next(err)
    }
  },
  getById: async (req, res, next) => {
    try {
      const { serieId } = req.params // userId (req.params ต้องตรงกับ route)
      console.log('serieid:', serieId)
      const serie = await Serie.findById(serieId).populate('genres')
      res.status(200).json(serie)
    }catch(e) {
      return res.status(401).json({ message:'Unable to get Serie by id' + e}) 
    }
  },
  create: async(req, res, next) => {
    try {
      const newSerie = new Serie(req.body)
      const serie = await newSerie.save()
      res.status(201).json(serie)
    } catch(err) {
      // next(err)
      return res.status(401).json({ message:'Unable to create serie' + err}) 
    }
  },
  addGenreToSerie: async (req, res, next) => {
    try {
      //add genre to serie
      const { serieId } = req.params;
      const addGenre = await Serie.findByIdAndUpdate(serieId,
        { $push: { genres: req.body.genre } }) //jsonต้องเป็นarray[]เท่านั้นไม่งั้นerr ไว้เขียนดักทีหลัง
      // add serie to genre
      // const genreId  = req.body.genre
      // for(var i=0; i < genreId.length; i++){
      //   console.log(genreId[i])
      //   const genre = await Genre.findById(genreId[i])
      //   genre.serie.push(serieId)
      //   await genre.save();
      // }
      res.json({message: '201: Successfully'}); //res.status(201).json(serie)
    } catch(err) {
      next(err)
    }
   },
  getGenreOfSerie: async (req, res, next) => {
    try {
      const { genreId } = req.params
      const genre = await Genre.findById(genreId).populate('serie')
      res.status(200).json(genre.serie)
    } catch(err) {
      next(err)
    }
  }
};