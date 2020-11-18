import mongoose from 'mongoose';
const Schema = mongoose.Schema

const celebSchema = new Schema({
  // name: String,
  name: {
    th: String,
    en: String,
    ch: String
  },
  description: {
    th: String,
    en: String,
    ch: String
  },
  filmography: [{
    type: Schema.Types.ObjectId,
    ref:'serie'  // https://mongoosejs.com/docs/populate.html#dynamic-ref
  }]
});
const Celeb = mongoose.model('celeb', celebSchema)
module.exports = Celeb

// 2	Filmography
// 2.1	Television series
// 2.2	Film
// 2.3	Variety show
// 2.4	Music video