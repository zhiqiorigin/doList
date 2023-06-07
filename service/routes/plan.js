const Router = require('koa-router')
const router = new Router({prefix:'/plan'})

const {auth} = require('../middleware/auth.middleware')
const {addPlan,getAllPlan} = require('../controller/plan.controller')

// auth获取用户的个人id与username
// 获取全部计划
router.get('/getall',auth, getAllPlan)
// 创建计划
router.post('/add',auth, addPlan)
//更新计划
router.post('/update',auth,(ctx,next) => {
    ctx.body={
        code:200,
        message:'更新成功',
        data:{
            plan:"完成"
        }
    }
})
// 删除计划
router.post('/delete',auth,(ctx,next) => {
    ctx.body={
        code:200,
        message:'删除成功',
        data:{
            plan:"完成"
        }
    }
})
module.exports = router
