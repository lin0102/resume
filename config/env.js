const dayjs = require('dayjs')

/**
 * 简历内容配置文件
 * @author CoderMing
 * https://github.com/coderming
 * 项目静态参数配置项
 * 此处配置会同时注入到build runtime和node runtime
 * @param {[String]} process.env.BUILT_TIME 运行build task时的时间，格式：'xxxx年xx月xx日 xx:xx'
 */
process.env.BUILT_TIME = dayjs().format('YYYY年MM月DD日 HH:mm')

process.env.PORT = 4001
