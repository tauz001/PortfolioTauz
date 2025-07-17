const express = require("express")
const app = express()
const PORT = 3000

app.use((req, res, next) => {
  console.log(req)
})

app.listen(PORT, () => {
  console.log(`server is runing on https://localhost:${PORT}`)
})
