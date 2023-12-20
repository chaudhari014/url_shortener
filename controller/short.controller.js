const { generateRandomBase62String } = require("../middleware/generateBase62")
const { urlModel } = require("../model/short.model")

// for convert to shorturl 
const convertToShort= async(req,res)=>{
   const {originalUrl} =req.body
   try {
    const checkurl=await urlModel.findOne({originalUrl:originalUrl})
    if(checkurl){
      return  res.status(200).json({"orignalUrl":checkurl.originalUrl,"shortUrl":`http://localhost:8060/${checkurl.shortUrl}` })
    }
    const shortUrl=generateRandomBase62String(4)
    // store inside DB
    const urlData=new urlModel({originalUrl,shortUrl})
     const saveData=await urlData.save()
    //  console.log(saveData)
    return res.status(200).json({"originalUrl":saveData.originalUrl,"shortUrl":`http://localhost:8060/${saveData.shortUrl}`})

    
   } catch (error) {
     return res.status(400).json({error:error.message})
   }

}

// for getting orignal url 
const convertToOrignal=async (req,res)=>{
    const {shortUrl}= req.params
 try {
    
    const result=await urlModel.findOne({shortUrl})
    // console.log(result)
    if(result){
      return   res.status(200).json({"originalUrl":result.originalUrl})
    }else{
        return res.status(400).json({"msg":"wrong url"})
    }
 } catch (error) {
    return res.status(400).json({"error":error.message})
 }

}

module.exports={convertToOrignal,convertToShort}