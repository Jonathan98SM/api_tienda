import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  name: {
    type:String,
    required: true,
    trim: true,
    unique: true
  },
  password:{
    type: String,
    trim: true
  },
  salt:{
    type: String,
    trim: true
  }
},{
  timestamps: true
})


export default mongoose.model('User',productSchema)