const install = (Vue, options) => {
  // 全局事件管理器
  Vue.prototype.$hub = new Vue();
}

export default { install }
