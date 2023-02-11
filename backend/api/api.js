const express = require('express');
const cors = require('cors');
const api = express();
const NGO = require('../models/ngos');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const cookieParser=require('cookie-parser');
const sessions = require('express-session');


const oneDay = 1000 * 60 * 60 * 24;

const saltRounds = 10;

var session;

api.use(sessions({
    secret:'thisismysecret',
    saveUninitialized:true,
    cookie:{maxAge: oneDay },
    resave : false
}));

api.use(cookieParser());




api.use(express.urlencoded({extended: true}))
api.use(express.json());
api.use(cors({
    origin: '*'
}));

api.get('/',(req,res)=>{
    //test
    session = req.session;
    console.log(session);
    if(session.userid){
        res.status(200).json({message:"Running" , session:"active"})
    }
    else
    res.status(200).json({message:"Running" , session:"in-active"})
    
});

api.post("/signup_user",(req,res)=>{
    const {email,password,firstname,lastname,gender,mobile,age,bio,interests} = req.body;
    const hash = bcrypt.hashSync(password,saltRounds)
    const NewUser = new User({
        email: email,
        password: hash,
        firstname:firstname,
        lastname:lastname,
        gender:gender,
        mobile:mobile,
        age:age,
        type:"donor",
        bio:bio,
        interests: interests
    })
    NewUser.save();
    res.status(200).json({message: "SignUp Successful"})
 });

 api.post("/signup_ngo",(req,res)=>{
    const {email,password,firstname,lastname,mobile,orgname,ngotype,founded,bio} = req.body;
    const hash = bcrypt.hashSync(password,saltRounds)
    const NewNGO = new NGO({
        email: email,
        password: hash,
        firstname:firstname,
        lastname:lastname,
        mobile:mobile,
        orgname:orgname,
        ngotype:ngotype,
        founded:founded,
        type:"ngo",
        bio:bio,
    })
    NewNGO.save();
    res.status(200).json({message: "SignUp Successful"})
 });

 api.post("/login_user",(req,res)=>{
    const {email,password} = req.body;
    User.findOne({email: email})
    .exec()
    .then((response)=>{
        if(response){
            const valid = bcrypt.compareSync(password,response.password)
        if(valid){
            session=req.session;
            session.userid = email;
            res.status(200).json({message: "Login Successful" ,success:true, email: email, session: session  , firstname: response.firstname 
        ,lastname:response.lastname , gender:response.gender, mobile:response.mobile,age:response.age,type:response.type,bio:response.bio,interests:response.interests})
        }
        else
        res.status(401).json({message:"Invalid Credentials",success:false})
        }
        else{
            res.status(401).json({message:"Invalid Credentials",success:false})
        }
        
    })
    .catch((err)=>console.log(err))
 });

 api.post("/login_ngo",(req,res)=>{
    const {email,password} = req.body;
    NGO.findOne({email: email})
    .exec()
    .then((response)=>{
        if(response){
            const valid = bcrypt.compareSync(password,response.password)
        if(valid){
            session=req.session;
            session.userid = email;
            res.status(200).json({message:"Login Successful" , success:true,email:email , session:session , firstname:response.firstname
        ,lastname:response.lastname,mobile:response.mobile,orgname:response.orgname,ngotype:response.ngotype,founded:response.founded,type:response.type,bio:response.bio})
        }
        else
        res.status(401).json({message:"Invalid Credentials",success:false})
        }
        else
        res.status(401).json({message:"Invalid Credentials",success:false})
        
    })
    .catch((err)=>console.log(err))
 });


 api.get("/logout",(req,res)=>{
    req.session.destroy();
    console.log("Session ended");
    res.redirect('/');
});

module.exports = api;
