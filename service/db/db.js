
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'doList'

// mongoose.set('useCreateIndex', true)
// mongoose.set('useFindAndModify', false)

// 连接 mongodb 并进入指定 database
mongoose.connect(url + '/' + dbName)

// 获取连接对象，添加一个错误处理函数
const conn = mongoose.connection
conn.on('error', err => {
  console.error("connection error(连接失败):", err)
})

module.exports = mongoose