import user from '../models/user.model.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

const singToken= (id)=>{
  return jwt.sing({_id},'mi-secreto',{
    expiresIn:60 * 60 * 24 * 365
  })
}
export const login =  (req,res)=>{
  const {name,password} = req.body
  user.findOne({name}).exec()
  .then(user=>{
    if (!user){
      res.send('Usuario y/o contraseña incorrecta')
    }
    crypto.pbkdf2(password,user.salt,10000,64,'Sha1',(err,key)=>{
      const encryptedPass =key.toString('base64')
      if (user.password === encryptedPass){
        const token = singToken(user._id)
        return res.send({token})
      }
      res.send('Usuario y/o COntraseña incorrecta')
    })
      
  })
}
export const registro =  (req,res)=>{
  const {name,password} = req.body
  crypto.randomBytes(16,(err,salt)=>{
    const newSalt = salt.toString('base64')
    crypto.pbkdf2(password,newSalt,10000,64,'Sha1',(err,key)=>{
      const encrypterPass = key.toString('base64')
      user.findOne({name}).exec()
      .then(user=>{
        if (user){
          res.send('Ususario existente')
        }
        user.create({
          name,
          password:encrypterPass,
          salt:newSalt
        }),then(()=>{
          res.send('Usuario credo con exito')
        })
      })
    })
  })
}