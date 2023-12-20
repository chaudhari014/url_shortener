const express=require("express")
const { connection } = require("./config/db")
require("dotenv").config()
const app=express()

// home route
app.get("/",(req,res)=>{
  return  res.status(200).json({msg:"Welcome to Url Shortener"})
})

// route not found
app.use((req,res)=>{
   return res.status(404).json({msg:"not found"})
})

// catch internal server error
app.use((err,req,res)=>{
    console.log(err.message,"server error")
   return res.status(500).json({msg:"server error" })
})

port=process.env.PORT || 8060

// server start
app.listen(port,async()=>{
 try {
    await connection
    console.log("db connected")
 } catch (error) {
    console.log(error)
 }
 console.log("server running")
})