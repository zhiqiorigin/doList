// 操作数据库
const Plan = require('../model/Plan')
const PlanSection = require('../model/PlanSection')
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
    * 操作plan删除
   * @param {string} _id [计划id]
   * @returns {Object}  [用户信息]
   */
 async deletePlanInfo(_id){
    const whereObj = {}
    _id && Object.assign(whereObj, {_id})
    console.log(whereObj)
    const res = await Plan.deleteOne(whereObj)
    console.log(res)    
    return res
    }
 /**
    * plan更新
   * @param {Object} planInfo [计划对象]
   * @returns {Object}  [用户信息]
   */
 async updatePlanInfo({_id,title,description,sectionName,children,date,done}){
    
    const newPlanInfo = {}
    title && Object.assign(newPlanInfo,{ title })
    description && Object.assign(newPlanInfo,{ description })
    sectionName && Object.assign(newPlanInfo,{ sectionName })
    children && Object.assign(newPlanInfo,{ children })
    date && Object.assign(newPlanInfo,{ date })
    done && Object.assign(newPlanInfo,{ done })

    Plan.findByIdAndUpdate(_id, newPlanInfo).then(rel=>{
      return rel
    }).catch(err=>{
      console.log(err)
    })
  }

 /**
    * 增加plansection
   * @param {Object} planInfo [section对象]
   * @returns {Object}  [用户信息]
   */
 async addPlansection(sectionInfo){
  // 数据库操作语句
  var planSection = new PlanSection(sectionInfo)
  const res = await planSection.save()
  return res
}
    /**
   * 获取所有用户计划分类
   * @param {planInfo} username [用户名]
   * @param {Object} password  [密码]
   * @returns {Object}  [用户信息]
   */
    async getAllPlanSection(user_id){
      // 数据库操作语句
      const whereObj = {}
      user_id && Object.assign(whereObj,{ user_id })

      const query = PlanSection.where(whereObj);
      const res = await query.find()
      console.log(res)
      return res
  }
   /**
    * 操作plansection删除
   * @param {string} _id [计划id]
   * @returns {Object}  [用户信息]
   */
 async deletePlansection(_id){
  const whereObj = {}
  _id && Object.assign(whereObj, {_id})
  console.log(whereObj)
  const res = await PlanSection.deleteOne(whereObj)
  console.log(res)    
  return res
  }
   /**
    * plansection更新
   * @param {Object} plansection [计划对象]
   * @returns {Object}  [用户信息]
   */
 async updatePlansection({_id,sectionName}){
    
  const newPlanInfo = {}
  sectionName && Object.assign(newPlanInfo,{ sectionName })
  PlanSection.findByIdAndUpdate(_id, newPlanInfo).then(res=>{
    return res
  }).catch(err=>{
    console.log(err)
  })
}
}

module.exports = new PlanService()