import mongoose from 'mongoose';
const Schema = mongoose.Schema

const celebSchema = new Schema({
  // name: String,
  name: {
    th: String,
    en: String,
    ch: String
  },
  description: String
});
const Celeb = mongoose.model('celeb', celebSchema)
module.exports = Celeb