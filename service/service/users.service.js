// 操作数据库
const User = require('../model/User')
class UserService{
  /**
   * @param {string} username [用户名]
   * @param {Object} password  [密码]
   * @returns {Object}  [用户信息]
   */
 async createUser(username, password){
      // 数据库操作语句
      var user = new User({
         username:username,
         password: password
      })
      const res = await user.save()
      return res
 }
 /**
  * 获取个人用户信息
   * @param {String} userInfo._id [用户id]
   * @param {String} userInfo.username [用户名]
   * @param {String} userInfo.password [密码]
   * @param {String} userInfo.role [用户权限]
   * @returns {Object}  [用户个人信息]
   */
 async getUserInfo({_id,username,password,role}) {
   // 数据库操作语句
   const whereObj = {}
   _id && Object.assign(whereObj,{ _id })
   username && Object.assign(whereObj,{ username })
   password && Object.assign(whereObj,{ password })
   role && Object.assign(whereObj,{ role })

   const query = User.where(whereObj);
   const userInfo = await query.findOne();
   console.log(userInfo)
   return userInfo? userInfo : null
   }
 /**
  * 根据id修改用户信息
   * @param {String} userInfo._id [用户id]
   * @param {String} userInfo.username [用户名]
   * @param {String} userInfo.password [密码]
   * @param {String} userInfo.role [用户权限]
   * @returns {Object}  [修改用户信息]
   */
  async updateById({id,username,password,role}){
    let _id = id
    const newUserInfo = {}
    username && Object.assign(newUserInfo,{ username })
    password && Object.assign(newUserInfo,{ password })
    role && Object.assign(newUserInfo,{ role })

    User.findByIdAndUpdate(_id, newUserInfo).then(rel=>{
      return rel
    }).catch(err=>{
      console.log(err)
    })
  }
}

module.exports = new UserService()