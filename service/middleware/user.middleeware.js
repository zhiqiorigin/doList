'use strict'
const  bcrypt = require('bcryptjs')

const { getUserInfo } = require('../service/users.service')
const { userFormateError,userAlreadyExisted,userDoesNotExist,passwordError,userLoginError} = require('../consitant/error.type')
/**
   * @param {Object} ctx [description]
   * @param {Function} next [跳转到下一个中间件]
   * @returns {Object}  [用户格式校验]
*/
const userValidator = async (ctx,next)=>{
    const {username,password} = ctx.request.body
    if(!username||!password){
        console.error('用户名或者密码不能为空',ctx.request.body)
        ctx.app.emit('error',userFormateError,ctx)
        return 
      }
    await next()
}
 /**
   * @param {Object} ctx [description]
   * @param {Function} next [跳转到下一个中间件]
   * @returns {Object}  [验证用户是否存在]
*/
const verifyUser = async (ctx,next)=>{
    const {username,password} = ctx.request.body
    if(username){
        if(await getUserInfo({ username })){
          console.error('用户已存在',ctx.request.body)
          ctx.app.emit('error',userAlreadyExisted,ctx)
          return
        }
      }
      await next()
}
 /**
   * @param {Object} ctx [description]
   * @param {Function} next [跳转到下一个中间件]
   * @returns {Object}  [密码加密]
*/
const cryptPassword = async (ctx,next)=>{
    const {password} = ctx.request.body
    const salt =bcrypt.genSaltSync(10)
    // hash保存的是密文
    const hash = bcrypt.hashSync(password,salt)
    ctx.request.body.password = hash
    await next()
}
 /**
   * @param {Object} ctx [description]
   * @param {Function} next [跳转到下一个中间件]
   * @returns {Object}  [登录校验]
*/
const verifyLogin= async (ctx,next)=>{
  const {username,password} = ctx.request.body
  // 判断用户是否存在，不存在就报错
  try{
      const res = await getUserInfo({ username })
      if(res==null){
        console.error('用户不存在',ctx.request.body)
        ctx.app.emit('error',userDoesNotExist,ctx)
        return 
      }
      if(!bcrypt.compareSync(password,res.password)){
        ctx.app.emit('error',passwordError,ctx)
        return 
      }
    }catch(error){
      console.error(error)
      ctx.app.emit('error',userLoginError,ctx)
    }
  
    await next()
}
module.exports = {
    userValidator,
    verifyUser,
    cryptPassword,
    verifyLogin
}