import jsonp from 'common/js/jsonp'
import {commondParams, options} from './config'
import axios from 'axios'
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commondParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
export function getDiscList () {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commondParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'jsonp'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSongList (disstid) {
  const url = '/api/getSongList'

  const data = Object.assign({}, commondParams, {
    uin: 0,
    format: 'json',
    notice: 0,
    platform: 'yqq',
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    needNewCode: 1,
    disstid,
    song_begin: 0,
    song_num: 15,
    nosign: 1
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
