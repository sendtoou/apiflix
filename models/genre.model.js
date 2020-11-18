import mongoose from 'mongoose';
const Schema = mongoose.Schema

const genreSchema = new Schema({
  name: {
    th: String,
    en: String,
    ch: String
  }
});
const Genre = mongoose.model('genre', genreSchema)
module.exports = Genre