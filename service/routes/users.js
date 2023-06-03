const Router = require('koa-router')
const router = new Router({prefix:'/users'})


const {register,login,updatePassword} = require('../controller/users.controller')
const {userValidator,verifyUser,cryptPassword,verifyLogin} = require('../middleware/user.middleeware')
const {auth} = require('../middleware/auth.middleware')
// 注册

router.post('/register', userValidator,verifyUser,cryptPassword,register)
//登录
router.post('/login',userValidator,verifyLogin,login)
// 修改密码接口
router.patch('/updatepassword',auth,cryptPassword,updatePassword)
// 修改头像

// 修改性别，生日，昵称

// 手机号

// 邮箱

// 删除用户，修改用户状态

// 查看所有用户
module.exports = router
