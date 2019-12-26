const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name:{type:String,required:true,min:[4,'Too Short'],max:[120,"Too long,mas take 120 character"]},
    email:{type:String,match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],required:'Email is required',min:[4,'Too Short'],max:[120,"Too long,mas take 120 character"]},
    mobile:{type:String,required:'Mobile is required'},
    
});



module.exports = mongoose.model('User',userSchema);