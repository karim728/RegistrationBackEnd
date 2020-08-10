//let mongodb = require('mongoose');
//let mysql= require('mysql');
import mysql from 'mysql';

// mongodb.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Database connection is a SUCCESS.......")
        
//     }
// })

//mysql

let db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
});

db.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Database connection is a SUCCESS.......")
        
    }
})

export default db ;