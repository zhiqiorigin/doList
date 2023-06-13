const Router = require('koa-router')
const router = new Router({prefix:'/course'})

const {auth} = require('../middleware/auth.middleware')
const {getAllCourse,addCourse,deleteCourse,updateCourse} = require('../controller/course.controller')

// auth获取用户的个人id与username
// 获取全部习惯
router.get('/getcourse',auth, getAllCourse)
// 创建习惯
router.post('/addcourse',auth,addCourse )
//更新习惯
router.patch('/updatecourse',auth,updateCourse)
// 删除习惯
router.delete('/deletecourse',auth,deleteCourse)

module.exports = router
