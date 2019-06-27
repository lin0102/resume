/**
 * 简历内容配置文件
 * @author CoderMing
 * https://github.com/coderming/resume
 *
 * @param {[String]} process.env.BUILT_TIME 运行build task时的时间，格式：'xxxx年xx月xx日 xx:xx'
 */

export { default as OptionConfig   } from './render/option'  // 总体配置

export { default as HeaderConfig   } from './render/header'  // 主体头部内容

export { default as SectionConfig  } from './render/section' // 主体内容

export { default as GitalkConfig   } from './render/gitalk'  // Gitalk配置

export { TitleConfig, FooterConfig } from './render/corner'  // 四个角标配置
