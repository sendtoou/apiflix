const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const serieSchema = new Schema({
//   globalName: String,
//   titleName: [{
//     _id:false,
//     lang: String,
//     name: String
//   }],
//   poster: String,
//   trailer: String,
//   synopsis: String,
//   episodes: [{
//     _id:false,
//     episodeNumber: String,
//     episodeTitle: String,
//     episodeSynopsis: String,
//     episodeLink: String
//   }],
//   rated: String,
//   programTime: Number,
//   cast: [{
//     _id:false,
//     lang: String,
//     name: [String]
//   }],
//   creators: [{
//     _id:false,
//     lang: String,
//     name: [String]
//   }],
//   genres:[String],
//   tab: [{
//     type: Schema.Types.ObjectId,
//     ref:'tab'
//   }]
// });

const serieSchema = new Schema({
  globalName: String,
  title: {
    th: String,
    en: String,
    ch: String
  },
  poster: String,
  trailer: String,
  synopsis: String,
  episodes: [{
    _id:false,
    chapter: String,
    epTitle: String,
    epSynopsis: String,
    epLink: String
  }],
  rated: String,
  programTime: Number,
  cast: [{
    _id:false,
    lang: String,
    name: [String]
  }],
  creators: [{
    _id:false,
    lang: String,
    name: [String]
  }],
  //genres:[String],
  genres: [{
    type: Schema.Types.ObjectId,
    ref:'genre'
  }],
  tab: [{
    type: Schema.Types.ObjectId,
    ref:'tab'
  }]
});
const Serie = mongoose.model('serie', serieSchema)
module.exports = Serie
/*
{
	"globalName": "V2H_TVBCS0071",
	"title":{"th":"มังกรหยกภาคปฐมบท","en":"THE LEGEND OF ARCHING HERO","ch":"射鵰英雄傳"},
	"poster":"http://96.30.124.103/lamdev/v2h/logo1/V2H_TVBCS0071.jpg",
	"trailer":"96.30.124.123//trefrere/aidheoodf",
	"synopsis":"ก๊วยเจ๋ง เติบโตในดินแดนมองโกล ได้รับการฝึกวิชาจาก 7 ประหลาดกังหนำ เขาและอาจารย์เดินทางกลับเข้าดินแดนจีนอีกครั้งเพื่อประลองกับ เอี้ยคัง ตามนัด ก๊วยเจ๋งได้พบกับ อึ้งย้ง ธิดาของภูตบูรพา อึ้งเอี๊ยะซือ ทั้งสองได้สนิทสนมและรักกัน ทั้งก๊วยเจ๋งและอึ้งย้งได้ฝากตัวเป็นศิษย์ของยาจกอุดร อั้งชิกกง จากนั้นก็ไปขัดขวางแผนการร้ายของพิษประจิม อาวเอี้ยงฮง ที่มีเอี้ยคังรวมอยู่ในกลุ่มคนร้ายด้วย เพราะกลุ่มคนร้ายนี้ทำงานให้กับกิมก๊กที่ต้องการยึดครองแผ่นดินจีน",
	"cast":[{"lang":"th","name":["หลิวเต๋อหัว","โจวชิงฉือ"]},{"lang":"en","name":["Andy Lue","Stephen Joe"]}],
	"creators":[{"lang":"th","name":"โจวชิกชิก"},{"lang":"en","name":"Chi Joe"}],
	"episodes":[
		{"chapter":"1",
		"epTitle":"THE Primal of arching hero",
		"episodeSynopsis":"นักธนูยุคโบราณ ตอนเด็ก",
		"episodeLink":"96.30.124.324/1kfritovfmv1/1dfldfkdlf1"},
		{"episodeNumber":"2",
		"episodeTitle":"Found the key book",
		"episodeSynopsis":"นักธนูยุคโบราณ ทำนั้น ทำนี้ ไปเรื่อย เดินตกเขาแล้วเจอคำภีร์",
    "episodeLink":"96.30.124.324/2kfritovfmv2/2dfldfkdlf2"}],
  "tab":[
    "5f166818a3391a18104fc44f"
  ]
}


"globalName": "V2H_TVBCS0074",
	"title":[{"lang":"th","name":"มังกรหยกภาคปฐมบท"},{"lang":"en","name":"THE LEGEND OF ARCHING HERO"},{"lang":"ch","name":"射鵰英雄傳"}],
	"poster":"http://96.30.124.103/lamdev/v2h/logo1/V2H_TVBCS0074.jpg",
	"trailer":"96.30.124.123//trefrere/aidheoodf",
	"synopsis":"ก๊วยเจ๋ง เติบโตในดินแดนมองโกล ได้รับการฝึกวิชาจาก 7 ประหลาดกังหนำ เขาและอาจารย์เดินทางกลับเข้าดินแดนจีนอีกครั้งเพื่อประลองกับ เอี้ยคัง ตามนัด ก๊วยเจ๋งได้พบกับ อึ้งย้ง ธิดาของภูตบูรพา อึ้งเอี๊ยะซือ ทั้งสองได้สนิทสนมและรักกัน ทั้งก๊วยเจ๋งและอึ้งย้งได้ฝากตัวเป็นศิษย์ของยาจกอุดร อั้งชิกกง จากนั้นก็ไปขัดขวางแผนการร้ายของพิษประจิม อาวเอี้ยงฮง ที่มีเอี้ยคังรวมอยู่ในกลุ่มคนร้ายด้วย เพราะกลุ่มคนร้ายนี้ทำงานให้กับกิมก๊กที่ต้องการยึดครองแผ่นดินจีน",
	"cast":[{"lang":"th","name":["หลิวเต๋อหัว","โจวชิงฉือ"]},{"lang":"en","name":["Andy Lue","Stephen Joe"]}],
	"creators":[{"lang":"th","name":"โจวชิกชิก"},{"lang":"en","name":"Chi Joe"}],
	"episodes":[
		{"episodeNumber":"1",
		"episodeTitle":"THE Primal of arching hero",
		"episodeSynopsis":"นักธนูยุคโบราณ ตอนเด็ก",
		"episodeLink":"96.30.124.324/1kfritovfmv1/1dfldfkdlf1"},
		{"episodeNumber":"2",
		"episodeTitle":"Found the key book",
		"episodeSynopsis":"นักธนูยุคโบราณ ทำนั้น ทำนี้ ไปเรื่อย เดินตกเขาแล้วเจอคำภีร์",
    "episodeLink":"96.30.124.324/2kfritovfmv2/2dfldfkdlf2"}],
  "tab":[
    "5f166818a3391a18104fc44f"
  ]



*/

/*
tab action: 5f166818a3391a18104fc44f
tab drama: 5f168648c0e5be2b0cefdde9
*/

/* poster
http://96.30.124.103/lamdev/v2h/logo1/V2H_TVBCS0064.jpg
http://96.30.124.103/lamdev/v2h/logo1/V2H_TVBCS0044.jpg
http://96.30.124.103/lamdev/v2h/logo1/V2H_TVBCS0074.jpg
http://96.30.124.103/lamdev/v2h/logo1/V2H_TVBCS0071.jpg
http://96.30.124.103/lamdev/v2h/logo1/V2H_TVBCS0088.jpg
*/