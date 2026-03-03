/**
 * database connect 
 */

const mongoose = require("mongoose")

function dbconnect() {
    mongoose.connect(process.env.mongooesUri)

        .then(() => {
            console.log("Database is connected..")
        })
}

module.exports = dbconnect