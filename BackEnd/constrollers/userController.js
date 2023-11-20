// const { Mongoose, default: mongoose } = require('mongoose');
// const Workout = require('../models/userModel')

// login
const loginUser = (req,res) =>{
    res.json({mssg : 'login the user'});
}

// signup
const signUpUser = (req,res) =>{
    res.json({mssg : 'signup the user'});
}

module.exports = {loginUser, signUpUser};