const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError")

// const adminId = (req,res,next)=>{
//     const {admin} = req.query;
//     if (admin === "Pra123"){
//        next(); 
//     }
//     throw new ExpressError(403,"ADMIN NOT FOUND")
// }


app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"ACCESS IS FORBIDDEN")
})

app.use((err,req,res,next)=>{
    let {status,message}= err;
    res.status(status).send(message);
})

app.listen(port,(req,res)=>{
    console.log("App is listening on port 8080");
    
})