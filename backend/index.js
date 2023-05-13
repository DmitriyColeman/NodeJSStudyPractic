const express = require( "express" )
const cors = require( "cors" )
const cookie_parser = require( "cookie-parser" )
const mongoose = require('mongoose')

require( "dotenv" ).config( )

const port = process.env.PORT || 5000
const app = express()

const start = async() => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
        app.listen(port, () => {
            console.log("SERVER STARTED AT PORT " + port)
        })
    } catch(e) {
        console.log(e)
    }
}

start();