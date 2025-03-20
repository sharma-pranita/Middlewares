const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError")

//Method-1
// app.use("/api",(req,res,next)=>{
//     const {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED")
// })


//Method-2
const checkToken = (req,res,next)=>{
    const {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED")
}

// app.use((req,res,next)=>{
//     req.time = Date.now();
// console.log(req.method,req.hostname,req.path,req.time);
// next();
// })


app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})

app.get("/",(req,res)=>{
    console.log("Hi I am Root");
    
})

app.get("/error",(req,res)=>{
    abcd = abcd;
})

// app.use((err,req,res,next)=>{
//     console.log("---------ERROR-----------");
//     res.send(err);
    
// })

app.use((err,req,res,next)=>{
let {status=500,message="An Error has occurred"}= err;
res.status(status).send(message);
})

//Error Handling--


app.listen(port,(req,res)=>{
    console.log("App is listening on port 8080");
    
})