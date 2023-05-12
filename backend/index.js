const express = require( "express" )
const cors = require( "cors" )
const cookie_parser = require( "cookie-parser" )
require( "dotenv" ).config( )

const port = process.env.PORT || 5000
const app = express()

const start = async() => {
    try {
        app.listen(port, () => {
            console.log("SERVER STARTED AT PORT " + port)

        })
    } catch(e) {
        console.log(e)
    }
}

start();