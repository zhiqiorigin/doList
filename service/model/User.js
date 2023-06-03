/*
  User Model
*/

const mongoose = require('../db/db')

/**
 * 定义一个模式(相当于传统意义的表结构)
 * 每个模式映射mongoDB的一个集合，
 * 它定义（只是定义，不是实现）这个集合里面文档的结构，就是定义这个文档有什么字段，字段类型是什么，字段默认值是什么等。
 * 除了定义结构外，还定义文档的实例方法，静态模型方法，复合索引，中间件等
 * @type {mongoose}
 */
const UserSchema = mongoose.Schema({
  id:{
    type:Number,
    default:new Date()
  },
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: String,
  age: Number,
  city: String,
  birth:Date,
  email: {
    type: String
  },
  phone: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  },
  gender: {
    type: Number,
    default: 0 // 0 保密，1 男，2 女
  },
  role:{
    type:Number,
    defalut:1 // 0管理员，1用户
  },
  avatar:{
    type:String,
    defalut:'https://tse3-mm.cn.bing.net/th/id/OIP-C.WaJLaJhB06vxZ5qCq_wJJAAAAA?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  }
}, { timestamps: true })


// 生成模型
const User = mongoose.model('User', UserSchema)

module.exports = User