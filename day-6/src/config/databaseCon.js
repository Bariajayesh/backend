/**
 * database se connect
 */

const mongoose = require("mongoose")

function dbconnect() {
    mongoose.connect(process.env.mongooseUri)

        .then(() => {
            console.log("database is connected....moj kar bhai")
        })
}

module.exports = dbconnect