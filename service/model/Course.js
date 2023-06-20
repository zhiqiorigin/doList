/*
  Habit Model
*/

const mongoose = require('../db/db')
/**
 * 定义一个模式(相当于传统意义的表结构)
 * 每个模式映射mongoDB的一个集合，
 * 它定义（只是定义，不是实现）这个集合里面文档的结构，就是定义这个文档有什么字段，字段类型是什么，字段默认值是什么等。
 * 除了定义结构外，还定义文档的实例方法，静态模型方法，复合索引，中间件等
 * @type {mongoose}
 */
const CourseSchema = mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },//用户id
    weekStart: {
        type: Number,
        default:1
    },
    weekEnd: {
        type: Number,
        default:17
    },
    week:{
        type: Number
    },//星期几上课
    dayTime: {
        type: String,
        require: true
    },//上课具体时间
    compus: {
        type: String,
        require: true
    },//上课校区
    className: {
        type: String
    },//课程名称
    classplace:{
        type: String,
        require: true
    },//上课具体地点
    teacher:{
        type: String,
        require: true
    }//任课教师
}, { timestamps: true })

// 生成模型
const Course = mongoose.model('Course', CourseSchema)

module.exports = Course