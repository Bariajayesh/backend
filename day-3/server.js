const express = require("express")

const app = express()

app.use(express.json())

const arr = []


app.post("/post", (req, res) => {

    console.log(req.body)
    arr.push(req.body)
    res.send("note create")
})

app.get("/notes", (req, res) => {
    res.send(arr)
})


app.listen(3000, () => {

    console.log("server is running...")

})