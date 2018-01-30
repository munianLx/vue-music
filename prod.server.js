var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var port = process.env.PORT || config.build.port

console.log(port)

var app = express()

var apiRoutes = express.Router()

app.get( '/api/lyric', function(req, res) {
  //这里是正常请求的地址
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
  //通过axios在nodejs中发送HTTP请求时，带上指定的headers以及params
  axios.get( url, {
    headers: {
      referer: 'https://y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  } ).then((response) => {
    // res.json(response.data)
    //得到的歌词数据是JSONP形式，需要将其转为JSON
    var ret = response.data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  } ).catch((err) => {
    console.log(err)
  })
})
app.get( '/api/getDiscList', function(req, res) {
  //这里是正常请求的地址
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  //通过axios在nodejs中发送HTTP请求时，带上指定的headers以及params
  axios.get( url, {
    headers: {
      referer: 'https://y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  } ).then((response) => {
    // res.json(response.data)
    //得到的歌词数据是JSONP形式，需要将其转为JSON
    var ret = response.data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  } ).catch((err) => {
    console.log(err)
  })
})
app.get( '/api/getSongList', function(req, res) {
  //这里是正常请求的地址
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  //通过axios在nodejs中发送HTTP请求时，带上指定的headers以及params
  axios.get( url, {
    headers: {
      referer: 'https://y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  } ).then((response) => {
    // res.json(response.data)
    //得到的歌词数据是JSONP形式，需要将其转为JSON
    var ret = response.data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  } ).catch((err) => {
    console.log(err)
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
