const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tabSchema = new Schema({
//   name: String,
//   status: Number,
//   serie: [{
//     type: Schema.Types.ObjectId,
//     ref:'serie'
//   }]
// }, { timestamps: true });

//   name: {
//     th: String,
//     en: String,
//     ch: String
//   },
//   isUsed: {
//     type: Boolean,
//     default: false
//   },
//   serie: [{
//     type: Schema.Types.ObjectId,
//     ref:'serie'
//   }]
// }, { timestamps: false });

  name: String,
  // names: [{
  //   _id:false,
  //   lang: String,
  //   name: String
  // }],
  isUsed: {
    type: Boolean,
    default: false
  },
  serie: [{
    type: Schema.Types.ObjectId,
    ref:'serie'
  }]
}, { timestamps: false });

const Tab = mongoose.model('tab', tabSchema)
module.exports = Tab

/*
{
  "name":{"th":"มังกรหยกในตำนาน","en":"THE LEGEND OF HERO","ch":"射鵰英雄傳射鵰英雄傳"}
}

{
  "names":[{"lang":"th","name":"มังกรหยกในตำนาน"},{"lang":"en","name":"THE LEGEND OF HERO"},{"lang":"ch","name":"射鵰英雄傳射鵰英雄傳"}]
}

*/