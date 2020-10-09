const Serie = require('../models/serie.model')

module.exports = {
  bodyView: (req, res, next) => {
    console.log(req.body)
  },
  allSerie: async(req, res, next) => {
    try {
      const series = await Serie.find({})
      res.status(200).json(series)
    } catch(err) {
      next(err)
    }
  },
  getById: async (req, res, next) => {
    try {
      const { serieId } = req.params // userId (req.params ต้องตรงกับ route)
      console.log('serieid:', serieId)
      const serie = await Serie.findById(serieId)
      res.status(200).json(serie)
    }catch(e) {
      return res.status(401).json({ message:'Unable to get Serie by id' + e}) 
    }
  },
  createSerie: async(req, res, next) => {
    try {
      const newSerie = new Serie(req.body)
      const serie = await newSerie.save()
      res.status(201).json(serie)
    } catch(err) {
      next(err)
    }
  }
};