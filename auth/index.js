import jwt from 'jsonwebtoken'
import user from '../models/user.model.js'

const isAuthenticated = (req,res,next)=>{
  const token = req.headers.authorization  
  if (!token){
   return res.sendStatus(403)
  }
  jwt.verify(token,'mi-secreto',(err,decode)=>{
    const {_id}=decode
    user.findOne({_id}).exec()
    .then(user=>{
      req.user = user
      next()
    })
  })
}
 export default isAuthenticated
