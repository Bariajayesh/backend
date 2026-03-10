/**
 * server ko start 
 * database se connect karna
 */

require("dotenv").config()

const app = require("./src/app")
const dbconnect = require("./src/config/databaseCon")


//connect to database
dbconnect()

//server run..
app.listen(3000, () => {
    console.log("server is run on port 3000.....")
})
