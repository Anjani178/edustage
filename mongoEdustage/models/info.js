const mongoose = require ('mongoose')

const infoSchema = new mongoose.Schema({
    email : { type:String,
        required: 'Email can\'t be empty',
        unique:true
    },
    password : { type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long'] },
    technologies : { type : String },
    facilities: { type : String },
    experience: { type : String },
    timeStart: { type : String },
    timeEnd : { type : String },
    url : { type : String },
    number: { type : String },
    role : { type : String },
})

infoSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

module.exports = mongoose.model('info',infoSchema) //model of type standup