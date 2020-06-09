export const getList = {
  request(params) {
    return params
  },
  response(data) {
    return data
  }
}
export const getTitle = {
  request(params) {
    return params
  },
  response(data) {
    return data
  }
}

export const getCrossDomainList = {
  request(params) {
    return params
  },
  response(data) {
    for (let i = 0; i < data.list.length; i++) {
      data.list[i].name = data.list[i].name.toUpperCase()
    }
    return data
  }
}