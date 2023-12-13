// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     'postcss-px-to-viewport': {
//       viewportWidth: 375,  // 视窗的宽度，对应设计稿的宽度
//       viewportHeight: 667, // 视窗的高度，对应设计稿的高度
//       unitPrecision: 3,    // 转换后的精度，即保留小数点位数
//       viewportUnit: 'vw',  // 转换成的视口单位
//       selectorBlackList: ['.ignore', '.hairlines'],  // 需要忽略的CSS选择器，例如 '.ignore'，表示 '.ignore' 下的元素不进行转换
//       minPixelValue: 1,    // 小于或等于1px不转换为视口单位
//       mediaQuery: false,   // 允许在媒体查询中转换为'px'
//     },
//     'postcss-plugin-px2rem': {
//       rootValue: 16,  // 基准值，表示1rem等于多少像素
//       minPixelValue: 2,  // 最小像素值，小于该值的单位不会被转换为rem
//     }
//   }
// }
