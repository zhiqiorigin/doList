// Course controller

const {getAllCourseInfo,addCourseInfo,deleteCourseInfo,updateCourseInfo} = require('../service/course.service')
const { addCourseError,getCourseError,deleteCourseError,updateCourseError} = require('../consitant/error.type')

class CourseController{
  /**
   * 1 获得个人课程
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async getAllCourse (ctx,next) {
  try{
    console.log("_______获取全部课程")
    const {id} = ctx.state.userInfo
    const user_id = id
    // 操作数据库
    const res = await getAllCourseInfo(user_id)

    ctx.body={
      code:200,
      message:'获取成功',
      data:{
          Course:res
      }
    }
  }catch(err){
    console.log(err)
    ctx.app.emit('error',getCourseError,ctx)
  }
}
  /**
   * 2 添加课程
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async addCourse (ctx,next) {
    try{
        console.log("_______添加课程")
        const {id} = ctx.state.userInfo
        const {courseInfo} = ctx.request.body;
        id && Object.assign(courseInfo,{ user_id:id })
        const res = await addCourseInfo(courseInfo)
        ctx.body={
            code:200,
            message:'添加成功',
            data:res
        }
    }catch(err){
        console.log(err)
        ctx.app.emit('error',addCourseError,ctx)
    }
  }
  /**
   *3  删除课程
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
  async deleteCourse (ctx,next) {
  try{
    const { _id }= ctx.request.body
    // 操作数据库
    const res = await deleteCourseInfo(_id)
    // 操作数据库
    ctx.body={
      code:200,
      message:'删除成果',
      data:res
  }
  }catch(err){
    console.error(err)
    ctx.app.emit('error',deleteCourseError,ctx)
  }
}
/**
   * 4 修改课程
   * @param {Function} next          [description]
   * @param {Object} ctx          [description]
   * @yield {[type]}   [description]
   */
async updateCourse (ctx,next) {

try{
  console.log(ctx.request.body)
  const {courseInfo} = ctx.request.body
  const {_id,compus,weekStart,weekEnd,week,dayTime,className,teacher} = courseInfo
  console.log(_id)
  const res = await updateCourseInfo({_id,compus,weekStart,weekEnd,week,dayTime,className,teacher})
  // 操作数据库
  ctx.body={
    code:200,
    message:'修改成功',
    data:res
}
}catch(err){
  console.error(err)
  ctx.app.emit('error',updateCourseError,ctx)
}
}
}
module.exports = new CourseController()
