<template>
<div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
         <!-- 轮播图 -->
        <HomeBanner />
      </div>
    </div>
  </div>
  <!-- 新鲜好物 -->
<HomeNew />
</template>

<script>
import HomeCategory from './components/home-categor.vue'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new'
export default {
  name: 'Home-view',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew
  }
}
</script>

<style lang="less" scoped>

</style>
