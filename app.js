const express = require ("express");
// const mongoose  = require ("mongoose");
// const cors  = require ("cors");
// const doteenv  = require ("dotenv")
const request = require ("request");

const app = express ();


//routes 

app.get("/", (req , res) => {
    res.send ("hello world")
})

app.get("/home", (req, res)=>{
    res.send ("this is the home page")
})

app.get("/acess_token", (req, res) =>{
let url = ""
let auth = new buffer().toString("base64")

    request(
        {
url:"",
headers:{
    "authorization": "Basic"+auth
}


    },
(error, response, body) =>{
    if(error){
        console.log(error)
    }
    else{
        res.status(200).json(body)
    }

}
)
})
app.listen(5000,(err, live)=>{
    if(err){
        console.log(err);
    }
    console.log("server is running on port 5000")

});

