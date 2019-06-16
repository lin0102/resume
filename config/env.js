const dayjs = require('dayjs')
/**
 * 项目静态参数配置项
 * 此处配置会同时注入到build runtime和node runtime
 */
process.env.BUILT_TIME = dayjs().format('YYYY年MM月DD日 HH:mm')

process.env.PORT = 4001
