const express = require("express")
const path = require("path")
const userRouter = express()

userRouter.get("/PortfolioTauz/#contact/forrm-submited", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "form-submited.html"))
})

module.exports = userRouter
