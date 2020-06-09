import {
  // 11位手机号
  validateMobile,
  // 邮箱
  validateEmail,
  // 身份证
  validateIDCard
} from './validate'

export const validatorCode = {
  // 非空校验
  checkNotNull(rule, value, callback) {
    if (
      String(value).replace(/^\s+|\s+$/gm, '') === '' ||
      (value instanceof Array && value[0] === '') ||
      value === null ||
      value === undefined
    ) {
      callback(new Error(this.message || (this.name || '内容') + '不能为空!'))
    } else {
      callback()
    }
  },
  // 11位手机号
  checkMobile(rule, value, callback) {
    if (value !== null && value !== '') {
      if (!validateMobile(value).status) {
        callback(new Error(validateMobile(value).msg))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 邮箱
  checkEmail(rule, value, callback) {
    if (value !== null && value !== '') {
      if (!validateEmail(value).status) {
        callback(new Error(validateMobile(value).msg))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 身份证号
  checkIdCard(rule, value, callback) {
    if (value !== null && value !== '') {
      if (!validateIDCard(value).status) {
        callback(new Error(validateMobile(value).msg))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
}
