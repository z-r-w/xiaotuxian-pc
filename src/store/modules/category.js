// 分类模块
import { topCategorys } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
  namespaced: true,
  state: {
    // 分类信息
    list: topCategorys.map(item => { return { name: item } })
    // console.log('list',list)
  },
  mutations: {
    setCategory (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getCategory (context) {
      const { result } = await findAllCategory()
      console.log('result', result)
      context.commit('setCategory', result)
    }

  }
}
