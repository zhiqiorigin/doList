// 操作数据库
const Habit = require('../model/Habit')
class HaibtService{
  /**
   * 获取所有用户计划
   * @param {habitInfo}  [des]
   * @param {Object}   [des]
   * @returns {Object}  [用户信息]
   */
    async getAllHabitInfo(user_id){
        // 数据库操作语句
        const whereObj = {}
        user_id && Object.assign(whereObj,{ user_id })

        const query = Habit.where(whereObj);
        const res = await query.find()
        console.log(res)
        return res
    }
   /**
    * 操作habit添加
   * @param {Object} habitInfo  [密码]
   * @returns {Object}  [用户信息]
   */
   async addHabitInfo(habitInfo){
    // 数据库操作语句
    var habit = new Habit(habitInfo)
    const res = await habit.save()
    return res
}
 /**
    * 操作habit删除
   * @param {string} _id [计划id]
   * @returns {Object}  [用户信息]
   */
 async deleteHabitInfo(_id){
    const whereObj = {}
    _id && Object.assign(whereObj, {_id})
    console.log(whereObj)
    const res = await Habit.deleteOne(whereObj)
    console.log(res)    
    return res
    }
 /**
    * plan更新
   * @param {Object} planInfo [计划对象]
   * @returns {Object}  [用户信息]
   */
 async updateHabitInfo({_id,habitName,habitIcon,habitSection,longTime,startDate,reminder,doHabitDays,done}){
    
    const newHabitInfo = {}
    habitName && Object.assign(newHabitInfo,{ habitName })
    habitIcon && Object.assign(newHabitInfo,{ habitIcon })
    habitSection && Object.assign(newHabitInfo,{ habitSection })
    longTime && Object.assign(newHabitInfo,{ longTime })
    startDate && Object.assign(newHabitInfo,{ startDate })
    reminder && Object.assign(newHabitInfo,{ reminder })
    doHabitDays && Object.assign(newHabitInfo,{ doHabitDays })
    done && Object.assign(newHabitInfo,{ done })

    Habit.findByIdAndUpdate(_id, newHabitInfo).then(rel=>{
      return rel
    }).catch(err=>{
      console.log(err)
    })
  }
}

module.exports = new HaibtService()