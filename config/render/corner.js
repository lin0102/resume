/**
 * 脚标栏
 * 网页显示的时候 将会显示在页面下方（非页面上）
 * 打印时会显示在页面最下面
 * 若为空，则不显示
 * 建议每边不超过15字
 * @param {[String]} 需要显示的内容
 */
export const FooterConfig = {
  left: '',
  right: '[网页版简历：resume.nalgd.top](https://resume.nalgd.top)',
  // 设置footer right字段是否默认为当前网页展示URL
  // 当right字段为空且此字段为true时，right部分会显示 "网页版简历：${location.url}"
  setDefaultRightUrl: true
}

/**
 * 顶部栏
 * 用法和footer一样
 * 不同的是，顶部栏不会出现在打印页面以及pad和手机端
 */
export const TitleConfig = {
  left: `最后同步时间：${process.env.BUILT_TIME}`,
  right: ''
}
