const TokenKey = 'Admin-Token'
const err = 'Error:保存到本地存储失败!'
const errlimt = 'Error:本地存储超过限制!'

export function setStorage(key, value, exprise, type) {
  return new Promise(resolve => {
    // 默认7天过期(毫秒)
    let valueDate = JSON.stringify({
      value: value,
      time: new Date().getTime(),
      exprise: exprise || 60 * 60 * 24 * 7 * 1000,
      type: type || ''
    })
    try {
      window.localStorage.setItem(key || TokenKey, valueDate)
    } catch (e) {
      if (isQuotaExceeded(e)) {
        window.localStorage.clear()
        throw errlimt
      } else {
        throw err
      }
    }
    resolve()
  })
}

export function getStorage(key) {
  if (window.localStorage.getItem(key || TokenKey)) {
    let dataObj = JSON.parse(window.localStorage.getItem(key || TokenKey))
    let isTimed = new Date().getTime() - dataObj.time > dataObj.exprise
    if (isTimed) {
      window.localStorage.removeItem(key || TokenKey)
      return null
    } else {
      return dataObj.value
    }
  } else {
    return null
  }
}

// 非空判断
export function isNotEmpty(value) {
  return value !== undefined && value !== '' && value !== null
}

function isQuotaExceeded(e) {
  let flag = false
  if (e) {
    if (e.code) {
      switch (e.code) {
        case 22:
          flag = true
          break
        // fireFox
        case 1014:
          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            flag = true
          }
          break
      }
    } else if (e.number === -2147024882) {
      // ie
      flag = true
    }
  }
  return flag
}