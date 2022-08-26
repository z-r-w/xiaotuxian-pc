<template>
  <!-- 头部导航 -->
  <AppTopnav></AppTopnav>
  <!-- 头部菜单 -->
  <AppHearer></AppHearer>
  <router-view></router-view>
  <!-- <div>{{$store.state.category.list}}</div> -->
  <!-- 底部 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppHearer from '@/components/app-header.vue'
import AppTopnav from '@/components/app-topnav.vue'
import AppFooter from '@/components/app-footer.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout-view',
  components: {
    AppTopnav,
    AppHearer,
    AppFooter
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getCategory')
  }
}
</script>

<style lang="less" scoped>

</style>
