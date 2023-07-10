const express = require("express");
const fs = require("fs")

// Initializing server
const app = express();

// create a port
const PORT = 8200;


// create server endpoint
app.get("/current/date-time",(req,res)=>{

    // Get a newdate
    // let date = new Date();
    // let content = date.toString();

    // // write a newfile "current time-date"
    // fs.writeFile("./currentTime-date.txt",content,(err)=>{
    //     if(err){
    //         res.send("Error occured")
    //     }else{

    //         // after writing read a existing file
    //         fs.readFile("./currentTime-date.txt","Utf-8",(err,data)=>{
    //             if(err){
    //                 res.send(`Error occured : ${err}`)
    //             }else{
    //                 res.send(data)
    //             }
    //         })
    //     }
    // })
    res.send("Am working propery right")
})

app.listen(PORT,()=>console.log(`the server is online : ${PORT}`))