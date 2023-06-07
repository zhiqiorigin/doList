// 操作数据库
const Plan = require('../model/Plan')
class PlanService{
  /**
   * 获取所有用户计划
   * @param {planInfo} username [用户名]
   * @param {Object} password  [密码]
   * @returns {Object}  [用户信息]
   */
    async getAllPlanInfo(user_id){
        // 数据库操作语句
        const whereObj = {}
        user_id && Object.assign(whereObj,{ user_id })

        const query = Plan.where(whereObj);
        const res = await query.find()
        console.log('______________________')
        console.log(res)
        return res
    }
   /**
    * 操作plan添加
   * @param {string} username [用户名]
   * @param {Object} password  [密码]
   * @returns {Object}  [用户信息]
   */
   async addPlanInfo(planInfo){
    // 数据库操作语句
    
    var plan = new Plan(planInfo)
    const res = await plan.save()
    return res
}
 /**
    * 操作plan添加
   * @param {string} username [用户名]
   * @param {Object} password  [密码]
   * @returns {Object}  [用户信息]
   */
 async deletePlanInfo(user_id){
    // 数据库操作语句

    return res
}
}

module.exports = new PlanService()