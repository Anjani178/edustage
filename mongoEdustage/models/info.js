const mongoose = require ('mongoose')

const infoSchema = new mongoose.Schema({
    email : { type:String },
    password : { type: String },
    technologies : { type : String },
    facilities: { type : String },
    experience: { type : String },
    timeStart: { type : String },
    timeEnd : { type : String },
    url : { type : String },
    number: { type : String },
    role : { type : String },
})

module.exports = mongoose.model('info',infoSchema) //model of type standup