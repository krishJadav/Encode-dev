const express =  require('express');
const mongoose = require("mongoose");

require('dotenv').config();
const app = express()
const routes = require('./Routes/productRoutes')

app.use(express.json())


// app.use((req, res, next) => {

//     console.log(req.path,req.method)
//     next()
// })

app.use('/api',routes)

mongoose.connect(process.env.MONG_URI)
    .then(() =>{
        app.listen(process.env.PORT, () => {
            console.log("Connected to database and listening to port", process.env.PORT)
        })
    })
    .catch( (err)=> (
        console.log(err)
    ))