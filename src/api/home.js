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
