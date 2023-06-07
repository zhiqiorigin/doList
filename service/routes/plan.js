const Router = require('koa-router')
const router = new Router({prefix:'/plan'})

const {auth} = require('../middleware/auth.middleware')
const {addPlan,getAllPlan,deletePlan,updatePlan} = require('../controller/plan.controller')

// auth获取用户的个人id与username
// 获取全部计划
router.get('/getall',auth, getAllPlan)
// 创建计划
router.post('/add',auth, addPlan)
//更新计划
router.patch('/update',auth,updatePlan)
// 删除计划
router.delete('/delete',auth,deletePlan)

module.exports = router
