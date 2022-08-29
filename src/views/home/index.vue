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
<HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
  <template v-slot:right>
    <XtxMore path="/"></XtxMore>
  </template>
</HomePanel>
</template>

<script>
import HomeCategory from './components/home-categor.vue'
import HomeBanner from './components/home-banner'
import HomePanel from './components/home-panel.vue'
export default {
  name: 'Home-view',
  components: {
    HomeCategory,
    HomeBanner,
    HomePanel
  }
}
</script>

<style lang="less" scoped>

</style>
