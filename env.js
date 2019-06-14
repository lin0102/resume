const dayjs = require('dayjs')
/**
 * 项目静态参数配置项
 */
process.env.BUILT_TIME = dayjs().format('YYYY年MM月DD日 HH:mm')

process.env.PORT = 4001
