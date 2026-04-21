const express = require('express');
const app = express();


const {router}= require('./routes/urlRoute');
const {connection} = require('./config/db');


connection('mongodb://127.0.0.1:27017/urlShortDb')
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err));


app.use('/',router);




app.listen(3000,()=>{
    console.log("server started at port 3000");
});