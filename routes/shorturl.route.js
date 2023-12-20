const express=require("express")
const { convertToShort, convertToOrignal } = require("../controller/short.controller")
const { auth } = require("../middleware/auth")

const short_URL=express.Router()

short_URL.post("/shorten",auth,convertToShort)

short_URL.get("/:shortUrl",convertToOrignal)

module.exports={short_URL}