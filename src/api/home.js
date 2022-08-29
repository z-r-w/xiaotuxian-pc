import request from '@/utils/request'
// 获取轮播图
export const findBanner = () => {
  return request('/home/banner', 'get')
}
