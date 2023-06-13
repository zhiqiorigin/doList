// 操作数据库
const Course = require('../model/Course')
class HaibtService{
  /**
   * 获取所有用户计划
   * @param {CourseInfo}  [des]
   * @param {Object}   [des]
   * @returns {Object}  [用户信息]
   */
    async getAllCourseInfo(user_id){
        // 数据库操作语句
        const whereObj = {}
        user_id && Object.assign(whereObj,{ user_id })

        const query = Course.where(whereObj);
        const res = await query.find()
        console.log(res)
        return res
    }
   /**
    * 操作Course添加
   * @param {Object} courseInfo  [密码]
   * @returns {Object}  [用户信息]
   */
   async addCourseInfo(courseInfo){
    // 数据库操作语句
    var course = new Course(courseInfo)
    const res = await course.save()
    return res
}
 /**
    * 操作habit删除
   * @param {string} _id [计划id]
   * @returns {Object}  [用户信息]
   */
 async deleteCourseInfo(_id){
    const whereObj = {}
    _id && Object.assign(whereObj, {_id})
    console.log(whereObj)
    const res = await Course.deleteOne(whereObj)
    console.log(res)    
    return res
    }
 /**
    * plan更新
   * @param {Object} planInfo [计划对象]
   * @returns {Object}  [用户信息]
   */
 async updateCourseInfo({_id,compus,weekStart,weekEnd,week,dayTime,className,teacher}){
    
    const newCourseInfo = {}
    compus && Object.assign(newCourseInfo,{ compus })
    weekStart && Object.assign(newCourseInfo,{ weekStart })
    weekEnd && Object.assign(newCourseInfo,{ weekEnd })
    week && Object.assign(newCourseInfo,{ week })
    dayTime && Object.assign(newCourseInfo,{ dayTime })
    className && Object.assign(newCourseInfo,{ className })
    teacher && Object.assign(newCourseInfo,{ teacher })

    Course.findByIdAndUpdate(_id, newCourseInfo).then(rel=>{
      return rel
    }).catch(err=>{
      console.log(err)
    })
  }
}

module.exports = new HaibtService()