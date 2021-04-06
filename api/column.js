const request = require('./request')

exports.getColumns = (params) => {
  return request({
    method: 'GET',
    url: '/column',
    params,
  })
}

exports.getColumnArticles = (params) => {
  return request({
    method: 'GET',
    url: '/column-article',
    params,
  })
}
