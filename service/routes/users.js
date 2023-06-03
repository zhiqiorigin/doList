const Router = require('koa-router')
const router = new Router({prefix:'/users'})


const {register,login} = require('../controller/users.controller')
const {userValidator,verifyUser,cryptPassword,verifyLogin} = require('../middleware/user.middleeware')
// 注册

router.post('/register', userValidator,verifyUser,cryptPassword,register)
//登录
router.post('/login',userValidator,verifyLogin,login)

module.exports = router
