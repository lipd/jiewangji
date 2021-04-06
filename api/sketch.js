const request = require('./request')

exports.getSketches = (params) => {
  return request({
    method: 'GET',
    url: '/sketch',
    params,
  })
}
