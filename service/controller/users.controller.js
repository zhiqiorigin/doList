// user controller
const { createUser } = require('../service/users.service')
const { registerError} = require('../consitant/error.type')
class UserController{
  /**
   * 注册新用户
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async register (ctx,next) {
  //1.解析参数 ctx.request.body调用了body-par的中间件,解析body传来的参数
    const {username,password} = ctx.request.body
    // 2.操作数据库
    try{
      const res = await createUser(username,password)
      console.log(res)
      // 3.返回结果
      ctx.body={
        code:200,
        message:'注册成功',
        result:{
          _id:res._id,
          username:res.username
        }
      }
    }catch(err){
      console.log(err)
      ctx.app.emit('error',registerError,ctx)
    }
    
  }

  /**
   * 登录
   * @param {Function} next          [description]
   * @yield {[type]}   [description]
   */
  async login (ctx,next) {
    const {username,password} = ctx.request.body

    ctx.body = `${username}欢迎回来`
  }
}
module.exports = new UserController()