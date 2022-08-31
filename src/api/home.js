import request from '@/utils/request'
// 获取轮播图
export const findBanner = () => {
  return request('/home/banner', 'get')
}
// 新鲜好物
export const findNew = () => {
  return request('home/new', 'get')
}
// 人气推荐
export const findHot = () => {
  return request('home/hot', 'get')
}
// 热门品牌
export const findBrand = (params) => {
  return request('/home/brand', 'get', params)
}
// 商品区块
export const findGoods = () => {
  return request('home/goods', 'get')
}
// 最新专题
export const findSpecial = () => {
  return request('home/special', 'get')
}
