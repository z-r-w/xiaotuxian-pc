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
  <HomeNew/>
  <!-- 人气好物 -->
  <HomeHot />
</template>

<script>
import HomeCategory from './components/home-categor.vue'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new'
import HomeHot from './components/home-hot'
export default {
  name: 'Home-view',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot
  }
}
</script>

<style lang="less" scoped>

</style>
