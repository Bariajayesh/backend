/**
 * server ko start 
 * database se connect karna
 */


const app = require("./src/app")
const mongoose = require("mongoose")


//connect to database
function dbconnect() {
    mongoose.connect("mongodb+srv://bjay28892_db_user:jayesh123@cluster0.oaguza3.mongodb.net/")

        .then(() => {
            console.log("database is connected....moj kar bhai")
        })
}

dbconnect()

//server run..
app.listen(3000, () => {
    console.log("server is run on port 3000.....")
})
