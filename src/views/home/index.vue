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
  <!-- 热门品牌 -->
  <homeBrand></homeBrand>
 <!-- 商品区域 -->
  <HomeProduct />
 <!-- 最新专题 -->
  <HomeSpecial />
</template>

<script>
import HomeCategory from './components/home-categor.vue'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new'
import HomeHot from './components/home-hot'
import homeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product'
import HomeSpecial from './components/home-speical.vue'
export default {
  name: 'Home-view',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    homeBrand,
    HomeProduct,
    HomeSpecial
  }
}
</script>

<style lang="less" scoped>

</style>
