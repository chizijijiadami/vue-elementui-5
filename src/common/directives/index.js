import store from 'data/store'
export default {
  // 是否有按钮权限判定
  btnHas: {
    inserted(el, binding) {
      if (
        !store.getters.app.auth.btn.includes(binding.value)
      ) {
        if (!!window.ActiveXObject || 'ActiveXObject' in window) {
          el.parentNode.removeChild(el)
        } else {
          el.remove()
        }
      }
    }
  }
}
