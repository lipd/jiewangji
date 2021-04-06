const axios = require('axios')

const request = axios.create({
  baseURL:
    'https://jiewangji-cms-9gah2saace74f1d3-1252681582.ap-shanghai.service.tcloudbase.com/api/v1.0/',
})

module.exports = request
