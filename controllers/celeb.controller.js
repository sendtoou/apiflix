const Celeb = require('../models/celeb.model')

module.exports = {
  getAll: async(req, res, next) => {
    try {
      const celebs = await Celeb.find({}).populate('filmography')
      res.status(200).json(celebs)
    } catch(err) {
      next(err)
    }
  },
  getById: async(req, res, next) => {
    try {
      const { celebId } = req.params
      const celeb = await Celeb.findById(celebId)
      res.status(200).json(celeb)
    } catch(e) {
      return this.res.status(401).json({ message: 'Unable to get by id' + e})
    }
  },
  create: async(req, res, next) => {
    try {
      const newCeleb = new Celeb(req.body)
      const celeb = await newCeleb.save()
      res.status(201).json(celeb)
    } catch(err) {
      next(err)
    }
  }
}