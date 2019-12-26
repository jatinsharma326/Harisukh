const User = require('../models/user')
const { normalizeErrors } = require('../helpers/mongoose')
const config = require('../config/secret')

exports.auth = (req,res)=>{
    const {Name,email,mobile} = req.body;

    if(!mobile || !email){
     return res.status(422).send({errors:[{title:'Data missing',detail:'Provide email and mobile'}]});
    }
    User.findOne({email},(err,user)=>{
        if(err){
            return res.status(422).send({errors:normalizeErrors(err.errors)});
        }
        if(!user){
            return res.status(422).send({errors:[{title:'Invalid User',detail:'User does not exist'}]});
        }
       
    });
}


exports.register = (req,res)=>{
const {Name,email,mobile} = req.body;

if(!mobile || !email){
 return res.status(422).send({errors:[{title:'Data missing',detail:'Provide email and password'}]});
}


User.findOne({email},(err,existingUser)=>{
    if(err){
        return res.status(422).send({errors:normalizeErrors(err.errors)});
    }
    if(existingUser){
        return res.status(422).send({errors:[{title:'Invalid email',detail:'User with this email is already exist'}]});
    }
    const user = new User({
        Name,email,mobile
    });
user.save((err)=>{
    if(err){
        return res.status(422).send({errors:normalizeErrors(err.errors)});
    }
    return res.json({'registered':true})
})
})
}

