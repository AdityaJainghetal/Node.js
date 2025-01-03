
const mongoose= require("mongoose");

const autherSchema=new mongoose.Schema({
    authername:String,
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }]
   
})
module.exports=mongoose.model("auther", autherSchema);