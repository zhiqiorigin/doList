const Router = require('koa-router')
const router = new Router({prefix:'/plan'})

const {auth} = require('../middleware/auth.middleware')
const {addPlan,getAllPlan,deletePlan,getPlanSection,updatePlan,addPlanSection,deletePlanSection,updatePlanSection} = require('../controller/plan.controller')

// auth获取用户的个人id与username
// 获取全部计划
router.get('/getall',auth, getAllPlan)
// 创建计划
router.post('/add',auth, addPlan)
//更新计划
router.patch('/update',auth,updatePlan)
// 删除计划
router.delete('/delete',auth,deletePlan)
// 获取分类列表
router.get('/getsection',auth,getPlanSection)
// 添加分类列表
router.post('/addsection',auth,addPlanSection)
// 删除分类列表
router.delete('/deletesection',auth,deletePlanSection)
// 修改分类列表
router.patch('/updatesection',auth,updatePlanSection)
module.exports = router
