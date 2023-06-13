const Router = require('koa-router')
const router = new Router({prefix:'/habit'})

const {auth} = require('../middleware/auth.middleware')
const {getAllHabit,addHabit,updateHabit,deleteHabit} = require('../controller/plagetPlanSectionn.controller')

// auth获取用户的个人id与username
// 获取全部习惯
router.get('/getall',auth, getAllHabit)
// 创建习惯
router.post('/add',auth, addHabit)
//更新习惯
router.patch('/update',auth,updateHabit)
// 删除习惯
router.delete('/delete',auth,deleteHabit)

module.exports = router
