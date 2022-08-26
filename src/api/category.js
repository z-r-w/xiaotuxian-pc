import request from '@/utils/request'

// 首页-全部分类（包含推荐商品）
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
