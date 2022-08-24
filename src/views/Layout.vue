<template>
  <!-- 头部导航 -->
  <AppTopnav></AppTopnav>
  <!-- 头部菜单 -->
  <AppHearer></AppHearer>
  <header>头部</header>
  <router-view></router-view>
  <footer>底部</footer>
</template>

<script>
import AppHearer from '@/components/app-header.vue'
import AppTopnav from '@/components/app-topnav.vue'
export default {
  name: 'Layout-view',
  components: {
    AppTopnav,
    AppHearer
  }
}
</script>

<style lang="less" scoped>

</style>
