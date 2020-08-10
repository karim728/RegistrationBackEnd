 import express  from 'express';
 import bodyParser from 'body-parser';
 import db from '../database/mdb.js';
 import cors from 'cors'

   import UserModel from '../models/user.js';
//const user = require('../models/user.js');

 let app = express();
 app.use(bodyParser.json())
app.use(cors());

 app.get('/',(req,res)=>{

     res.send("data has benn send")
     
 })


 app.get('/add',(req,res)=>{
    
    //  console.log(req.body)
    // let User = new UserModel();
    //  User.firstname=req.body.firstname;
    //  User.lastname=req.body.lastname;
    //  User.email=req.body.email;
    //  User.password=req.body.password;
    // console.log(UserModel.find())
    // User.save()
    //  .then((e)=>{
    //      if(e){
    //         console.log(e)
    //      }else{
    //          console.log("added")
    //          res.end("OK...");
    //      }
    //  })

    res.send("from get add")
    
})

app.post('/add',(req,res)=>{
    let data={
        firstname   : req.body.firstname,
        lastname    : req.body.lastname,
        email       : req.body.email,
        username    : req.body.username,
        password    : req.body.password
    }

    console.log(req.body)

    db.query('INSERT INTO Users SET ?',data,(err,result)=>{
       if(err){
           console.log(err)
       }else{
           console.log("send................................................")
       }
    })
})

app.get('/login',(req,res)=>{


    

    db.query('SELECT* FROM Users',(err,result)=>{
       if(err){
           console.log(err)
       }else{
           res.send(result)
           console.log("send................................................")
       }
    })
})

 app.listen('3000',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server connection is a SUCCESS....... PORT : 3000")
    }
 })

