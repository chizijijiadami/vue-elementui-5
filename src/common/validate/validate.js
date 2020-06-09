/* 邮箱 */
export function validateEmail(email) {
  const re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  if (email.length === 0) {
    return { status: false, msg: '邮箱不能为空！' }
  }
  if (!re.test(email)) {
    return { status: false, msg: '请输入有效的邮箱！' }
  }
  return { status: true }
}
// 验证手机号
export function validateMobile(mobile) {
  if (mobile.length !== 11) {
    return { status: false, msg: '请输入有效的手机号码，需是11位！' }
  }

  var myreg = /^(1[0-9]{10})$/
  if (!myreg.test(mobile)) {
    return { status: false, msg: '请输入有效的手机号码！' }
  }
  return { status: true }
}
// 验证身份证
export function validateIDCard(id) {
  // 1 "验证通过!", 0 //校验不通过
  var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
  // 号码规则校验
  if (!format.test(id)) {
    return { status: false, msg: '身份证号码不合规' }
  }
  // 区位码校验
  // 出生年月日校验   前正则限制起始年份为1900;
  var year = id.substr(6, 4) // 身份证年
  var month = id.substr(10, 2) // 身份证月
  var date = id.substr(12, 2) // 身份证日
  var time = Date.parse(month + '-' + date + '-' + year) // 身份证日期时间戳date
  var nowTime = Date.parse(new Date()) // 当前时间戳
  var dates = new Date(year, month, 0).getDate() // 身份证当月天数
  if (time > nowTime || date > dates) {
    return { status: false, msg: '出生日期不合规' }
  }
  // 校验码判断
  var c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 系数
  var b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'] // 校验码对照表
  var idArray = id.split('')
  var sum = 0
  for (var k = 0; k < 17; k++) {
    sum += parseInt(idArray[k]) * parseInt(c[k])
  }
  if (idArray[17].toUpperCase() !== b[sum % 11].toUpperCase()) {
    return { status: false, msg: '身份证校验码不合规' }
  }
  return { status: true, msg: '校验通过' }
}