<template>
  <!-- 头部导航 -->
  <AppTopnav></AppTopnav>
  <!-- 头部菜单 -->
  <AppHearer></AppHearer>
  <router-view></router-view>
  <!-- 底部 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppHearer from '@/components/app-header.vue'
import AppTopnav from '@/components/app-topnav.vue'
import AppFooter from '@/components/app-footer.vue'
export default {
  name: 'Layout-view',
  components: {
    AppTopnav,
    AppHearer,
    AppFooter
  }
}
</script>

<style lang="less" scoped>

</style>
