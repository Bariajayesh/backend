/**
 * server ko run karna
 * database connect
 */


require("dotenv").config()
const app = require("./src/app")
const dbconnect = require("./src/config/dbconnect")

dbconnect()

app.listen(3000, ()=>{
    console.log("Server is runing on port 3000..")
})