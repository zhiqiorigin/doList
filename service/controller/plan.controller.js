// user controller

const {addPlanInfo,getAllPlanInfo} = require('../service/plan.service')
const { getAllPlansError,addPlansError} = require('../consitant/error.type')

class PlanController{
  /**
   * 获得计划
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async getAllPlan (ctx,next) {
    /**
     * 1.获取数据
     * 2.操作数据库
     * 3.返回结果
     */
  try{
    console.log(ctx.state.userInfo)//获取用户id
    const {id} = ctx.state.userInfo
    const user_id = id
    // 操作数据库
    const res = await getAllPlanInfo(user_id)

    ctx.body={
      code:200,
      message:'获取成功',
      data:{
          Plans:res
      }
    }
  }catch(err){
    console.log(err)
    ctx.app.emit('error',getAllPlansError,ctx)
  }
}
  /**
   * 添加计划
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async addPlan (ctx,next) {
    try{
      console.log(ctx.state.userInfo)//获取用户id
      const {id} = ctx.state.userInfo
      const {planInfo} = ctx.request.body;
      id && Object.assign(planInfo,{ user_id:id })
      console.log(planInfo)
      const res = await addPlanInfo(planInfo)
      ctx.body={
        code:200,
        message:'添加成功',
        data:res
      }
    }catch(err){
      console.log(err)
      ctx.app.emit('error',addPlansError,ctx)
    }
  }
  /**
   * 删除计划
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async deletePlan (ctx,next) {
    /**
     * 1.获取数据
     * 2.操作数据库
     * 3.返回结果
     */
  try{
    const {id} = ctx.request.body
   
    // 操作数据库
    ctx.body={
      code:200,
      message:'删除成果',
      data:{
          _id:id,
      }
  }
  }catch(err){
    console.error(err)
  }
}
/**
   * 修改计划
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
async updatePlan (ctx,next) {
  /**
   * 1.获取数据
   * 2.操作数据库
   * 3.返回结果
   */
try{

  // 操作数据库
  ctx.body={
    code:200,
    message:'修改成果',
    data:{
    }
}
}catch(err){
  console.error(err)
}
}
}
module.exports = new PlanController()