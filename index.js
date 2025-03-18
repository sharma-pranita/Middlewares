const express = require("express");
const app = express();
const port = 8080;



app.use((req,res,next)=>{
    req.time = Date.now();
console.log(req.method,req.hostname,req.path,req.time);
next();
})

app.get("/",(req,res)=>{
    console.log("Hi I am Root");
    
})

app.listen(port,(req,res)=>{
    console.log("App is listening on port 8080");
    
})