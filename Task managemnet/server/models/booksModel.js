const mongoose= require("mongoose");
const booksSchema= new mongoose.Schema({
   
    booktitle:String,
    price:Number,
    autherid:{
         type: mongoose.Schema.Types.ObjectId,
         ref:"auther"
    }

})
module.exports = mongoose.model("book", booksSchema);