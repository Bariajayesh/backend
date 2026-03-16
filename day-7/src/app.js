/**
 * server create karna
 * server ko configure karna
 */

const express = require("express")
const noteModel = require("./model/note.model")

const app = express()
app.use(express.json())


/**
 * -post /note create
 */

app.post("/notes", async (req, res) => {

    const { title, description } = req.body

    const note = await noteModel.create({

        title, description
    })

    res.status(201).json({
        massage: "Note Successfully connected.."
    })

})


/**
 * -get /note show
 * -fatch all note data
 */

app.get("/notes", async (req, res) => {

    const note = await noteModel.find()

    res.status(200).json({
        massage: "Note successfully fatch..",
        note
    })

})

/**
 * delete notes/:id
 * Delete note with the id from req.params
 */

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id

    const deletenote = await noteModel.findByIdAndDelete(id)

    if (!deletenote) {
        return res.status(400).json({
            massage: "Note Not Found"
        })
    }

    res.status(200).json({
        message: "Note successfully deleted.",
        deletenote
    })
})

/**
 * Patch notes/:id
 * update the description of the note by id
 * req.body = {description}
 */

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const { description } = req.body

    const updatedNote = await noteModel.findByIdAndUpdate (id, { description },{new:true})


    res.status(200).json({
        message: "Note Successfully Updated.",
        updatedNote
    })
})

module.exports = app