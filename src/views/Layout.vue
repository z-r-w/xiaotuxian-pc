<template>
  <AppTopnav></AppTopnav>
  <header>头部</header>
  <router-view></router-view>
  <footer>底部</footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
export default {
  name: 'Layout-view',
  components: {
    AppTopnav
  }
}
</script>

<style lang="less" scoped>

</style>
