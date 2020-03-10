const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const verify = require("../models/verifytoken");
const { validateUserLogin, validateUserRegister } = require("../models/validatereq");



router.post('/login', async (req, res) => {
    console.log(req.body);
    
    const { error } = validateUserLogin(req.body);

    try {
        //validate user request for data
    if (error) return res.status(400).send({status: 'Error', message: error.details[0].message});

    const userExists = await User.findOne({email: req.body.email});

    if (!userExists) return res.status(400).send({status: 'Error', message: 'Incorrect Email or Password!'});

    //compare user password with our encryption password
    const isCorrect = await bcrypt.compare(req.body.password, userExists.password);
    
    if (!isCorrect) return res.status(400).send({status: 'Error', message: 'Incorrect Email or Password!'});
    const token = jwt.sign({
        _id: userExists._id,
        firstname: userExists.firstname,
        lastname: userExists.lastname,
    email: userExists.email}, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.header("auth-header", token).send({
        status: 'Success',
        message: 'Logged In Successfully!',
        token: token,
        user: {
            _id: userExists._id,
            firstname: userExists.firstname,
            lastname: userExists.lastname,
            email: userExists.email
        }
    });
    } catch (error) {
        res.status(400).json({status: 'Error', message: error});
    }

});

router.get('/', verify , async (req, res) => {
    res.send(await User.find());
});

router.post('/register', async (req, res) => {
    //res.json({data: req.body});
    //Validate data from user using hapi/joi
    

    const { error } = validateUserRegister(req.body);
    if (error) return res.status(400).send({status: 'Error', message: error.details[0].message});

    //check if user exists or not
    try {
        const emailExists = await User.findOne({email: req.body.email});
        if (emailExists) return res.status(400).json({status: 'Error', message: 'Email Already Exists!'});
    } catch (err) {
        return res.status(400).send({status: 'Error', message: err});
    }

    //generate a hash and encrypt user password
    let hashedPassword = null;

    try {
        let salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(req.body.password, salt);
    } catch (error) {
        
    }

    //save user
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email.toLowerCase(),
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        //return user object back
        res.json({status: 'Success', message: { user: { 
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email }}});

    } catch (err) {
        return res.status(400).send({status: 'Error', message: err});
    }
    
});

module.exports = router;
