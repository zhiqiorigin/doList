// habit controller

const {getAllHabitInfo,addHabitInfo,deleteHabitInfo,updateHabitInfo} = require('../service/habit.service')
const { addHabitError,getHabitError,deleteHabitError,updateHabitError} = require('../consitant/error.type')

class HabitController{
  /**
   * 1 获得习惯
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async getAllHabit (ctx,next) {
  try{
    console.log(ctx.state.userInfo)//获取用户id
    const {id} = ctx.state.userInfo
    const user_id = id
    // 操作数据库
    const res = await getAllHabitInfo(user_id)

    ctx.body={
      code:200,
      message:'获取成功',
      data:{
          Habits:res
      }
    }
  }catch(err){
    console.log(err)
    ctx.app.emit('error',getHabitError,ctx)
  }
}
  /**
   * 2 添加习惯
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async addHabit (ctx,next) {
    try{
      console.log(ctx.state.userInfo)//获取用户id
      const {id} = ctx.state.userInfo
      const {habitInfo} = ctx.request.body;
      id && Object.assign(habitInfo,{ user_id:id })
      console.log(habitInfo)
      const res = await addHabitInfo(habitInfo)
      ctx.body={
        code:200,
        message:'添加成功',
        data:res
      }
    }catch(err){
      console.log(err)
      ctx.app.emit('error',addHabitError,ctx)
    }
  }
  /**
   *3  删除计划
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async deleteHabit (ctx,next) {
    /**
     * 1.获取数据
     * 2.操作数据库
     * 3.返回结果
     */
  try{
    const { _id }= ctx.request.body
    // 操作数据库
    const res = await deleteHabitInfo(_id)
    // 操作数据库
    ctx.body={
      code:200,
      message:'删除成果',
      data:res
  }
  }catch(err){
    console.error(err)
    ctx.app.emit('error',deleteHabitError,ctx)
  }
}
/**
   * 4 修改计划
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
async updateHabit (ctx,next) {

try{
  console.log(ctx.request.body)
  const {habitInfo} = ctx.request.body
  const {_id,habitName,habitIcon,habitSection,longTime,startDate,reminder,doHabitDays,done} = habitInfo
  console.log(_id)
  const res = await updateHabitInfo({_id,habitName,habitIcon,habitSection,longTime,startDate,reminder,doHabitDays,done})
  // 操作数据库
  ctx.body={
    code:200,
    message:'修改成功',
    data:res
}
}catch(err){
  console.error(err)
  ctx.app.emit('error',updateHabitError,ctx)
}
}
}
module.exports = new HabitController()
