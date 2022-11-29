import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  name: {
    type:String,
    required: true,
    trim: true,
    unique: true
  },
  description:{
    type: String,
    trim: true
  },
  precie: {
    type: Number,
    default: 0
  },
  image:{
    public_id: String,
    secure_urls: String
  }
},{
  timestamps: true
})


export default mongoose.model('Product',productSchema)