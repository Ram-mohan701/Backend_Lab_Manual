const express = require('express');
const app = express();
const {urlMod} = require('../models/urlModel');
const {nanoid} = require('nanoid');


//Middleware
 app.use(express.json());                        //when the data send raw form like json format and file 
 app.use(express.urlencoded({extended:true}));   //this middleware use when data send with url


async function generateUrl(req,res){
    const actUrl = req.query.actUrl;
    if(!actUrl) return res.status(404).json({err:"URL is mandatory"});   //if url not find 

    const shortUrl = nanoid(10);


await urlMod.create({shorturl:shortUrl,actualurl:actUrl});
return res.json({shorted:shortUrl});
}
module.exports = {generateUrl};