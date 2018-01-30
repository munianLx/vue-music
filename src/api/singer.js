import jsonp from 'common/js/jsonp'
import {commondParams, options} from './config'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  // 把公共参数和其他参数合并
  const data = Object.assign({}, commondParams, {
    channel: 'singer',
    page: 'list',
    key: 'eu_team_all',
    pagesize: 100,
    pagenum: 1,
    loginUin: 0,
    hostUin: 0,
    g_tk: 450152082,
    platform: 'yqq',
    needNewCode: 0,
    format: 'jsonp'
  })
  return jsonp(url, data, options)
}
export function getSingerDetail (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  // 把公共参数和其他参数合并
  const data = Object.assign({}, commondParams, {
    singermid: singerId,
    loginUin: 0,
    hostUin: 0,
    g_tk: 5381,
    platform: 'yqq',
    needNewCode: 0,
    format: 'jsonp',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1
  })
  return jsonp(url, data, options)
}
