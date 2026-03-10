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

app.get("/notes", async(req,res)=>{

   const note = await noteModel.find()

   res.status(200).json({
        
        massage:"Note successfully fatch..",
        note
    
   })
    
})






module.exports = app