const request = require('./request')

exports.getOthers = (params) => {
  return request({
    method: 'GET',
    url: '/other',
    params,
  })
}
