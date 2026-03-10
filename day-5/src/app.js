/* this file create server instant */
/* server config */

const express = require("express")

/* call the express here */
const app = express()

//JSON body parse middleware
app.use(express.json())

const note = []

/* crete notes using post method */
app.post("/notes", (req, res) => {

    note.push(req.body)

    res.status(201).json({
        "massage": "note succsfully created"
    })
})

/* show notes using get method */
app.get("/notes", (req, res) => {

    res.status(201).json({
        notes: note
    })

})

/* delete notes using delete method */
app.delete("/notes/:index", (req, res) => {
    delete note[req.params.index]

    res.status(201).json({
        "masaage":"Note Succsfully Deleted.."
    })
})

/* export server instant */
module.exports = app