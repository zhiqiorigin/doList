const jwt = require('jsonwebtoken');
const JWT_SECRETE= 'JWT'
const { tokenExpiredError,invalidTokenError } = require('../consitant/error.type')
// 授权中间件
 const auth = async (ctx,next)=>{
    // 获取token,做用户授权操作
    const {authorization} = ctx.request.header
    const token = authorization.replace('Bearer ','')
    try{
       const userInfo = jwt.verify(token,JWT_SECRETE)//包含id,username
       console.log(userInfo)
       ctx.state.userInfo = userInfo
    }catch(error){
        switch(error.name){
            case 'TokenExpiredError':
                console.error('token已过期',error)
                return ctx.app.emit('error',tokenExpiredError,ctx)
            case 'JsonWebTokenError':
                console.error('无效的token信息',error)
                return ctx.app.emit('error',invalidTokenError,ctx)
        }
    }
    await next();
}
module.exports = {
    auth
}