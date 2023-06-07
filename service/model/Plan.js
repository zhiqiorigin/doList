/*
  Plan Model
*/

const mongoose = require('../db/db')

/**
 * 定义一个模式(相当于传统意义的表结构)
 * 每个模式映射mongoDB的一个集合，
 * 它定义（只是定义，不是实现）这个集合里面文档的结构，就是定义这个文档有什么字段，字段类型是什么，字段默认值是什么等。
 * 除了定义结构外，还定义文档的实例方法，静态模型方法，复合索引，中间件等
 * @type {mongoose}
 */
const PlanSchema = mongoose.Schema({
    user_id:{
      type: String,
      require: true
    },
    title: {
        type: String,
        require: true
    },
    description:{
        type:String
    },//具体计划内容
    childplan:{
        type:Array
    },//子计划
    sectionName:{
        type: String,
        default:'MyList'
    },//计划属于哪个模块（学习，生活,默认为MyList）
    date: {
        type: Date,
        default: new Date()
    },//规定完成的时间
    done:{
        type:Boolean,
        defalut:false // true完成，false未完成
    }
}, { timestamps: true })

// 生成模型
const Plan = mongoose.model('Plan', PlanSchema)

module.exports = Plan