// user controller

const {updatePlansection,deletePlansection,getAllPlanSection,addPlansection,getAllPlanInfo,deletePlanInfo,updatePlanInfo,addPlanSection} = require('../service/plan.service')
const { updatePlansSectionError,deletePlansSectionError,getPlansSectionError,addPlansSectionError,getAllPlansError,addPlansError,updatePlansError,deletePlansError} = require('../consitant/error.type')

class PlanController{

  /**
   * 1 获得计划
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
   * 2 添加计划
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
   * 3 删除计划
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
    const { _id }= ctx.request.body
    // 操作数据库
    const res = await deletePlanInfo(_id)
    // 操作数据库
    ctx.body={
      code:200,
      message:'删除成果',
      data:res
  }
  }catch(err){
    console.error(err)
    ctx.app.emit('error',deletePlansError,ctx)
  }
}
/**
   * 4 修改计划
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
  const {_id,title,description,sectionName,children,date,done} = ctx.request.body
  const res = await updatePlanInfo({_id,title,description,sectionName,children,date,done})
  // 操作数据库
  ctx.body={
    code:200,
    message:'修改成功',
    data:res
}
}catch(err){
  console.error(err)
  ctx.app.emit('error',updatePlansError,ctx)
}
}
/**
   * 5 获得计划分类
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  /**
   * 获得计划
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async getPlanSection (ctx,next) {
    try{
      console.log(ctx.state.userInfo)//获取用户id
      const {id} = ctx.state.userInfo
      const user_id = id
      // 操作数据库
      const res = await getAllPlanSection(user_id)
  
      ctx.body={
        code:200,
        message:'获取成功',
        data:{
            planSection:res
        }
      }
    }catch(err){
      console.log(err)
      ctx.app.emit('error',getPlansSectionError,ctx)
    }
}
/**
   * 6 增加计划分类
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
async addPlanSection (ctx,next) {
  try{
    console.log(ctx.state.userInfo)//获取用户id
    const {id} = ctx.state.userInfo
    const {sectionInfo} = ctx.request.body;
    id && Object.assign(sectionInfo,{ user_id:id })
    console.log(sectionInfo)
    const res = await addPlansection(sectionInfo)
    ctx.body={
      code:200,
      message:'添加成功',
      data:res
    }
  }catch(err){
    console.log(err)
    ctx.app.emit('error',addPlansSectionError,ctx)
  }
}
/**
   * 删除计划列表
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
async deletePlanSection (ctx,next) {
  try{
    const { _id }= ctx.request.body
    // 操作数据库
    const res = await deletePlansection(_id)
    // 操作数据库
    ctx.body={
      code:200,
      message:'删除成功',
      data:res
  }
  }catch(err){
    console.error(err)
    ctx.app.emit('error',deletePlansSectionError,ctx)
  }
}
/**
   * 修改计划
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
async updatePlanSection (ctx,next) {
  /**
   * 1.获取数据
   * 2.操作数据库
   * 3.返回结果
   */
  try{
    const {_id,sectionName} = ctx.request.body
    const res = await updatePlansection({_id,sectionName})
    // 操作数据库
    ctx.body={
      code:200,
      message:'修改成功',
      data:res
  }
  }catch(err){
  console.error(err)
  ctx.app.emit('error',updatePlansSectionError,ctx)
}
}
}
module.exports = new PlanController()
