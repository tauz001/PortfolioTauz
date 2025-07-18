const express = require("express")
const userRouter = require("./routes/userRoutes")
const cors = require("cors")
const fs = require("fs")
const bodyParser = require("body-parser")

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/submit-form", (req, res) => {
  const formData = req.body

  const dataToSave = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}\n---\n`

  fs.appendFile("formData.txt", dataToSave, err => {
    if (err) {
      console.error("Error saving data:", err)
      return res.status(500).send("Failed to save")
    }
    res.send("Form data saved successfully!")
  })
})

app.use(userRouter)

app.use((req, res) => {
  res.status(404).send("Not Found")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
