<template>
  <div class="home-banner">
    <XtxCarousel :sliders="sliders" :autoPlay="true" />
  </div>
</template>
<script>
import { findBanner } from '@/api/home'
import { ref, onMounted } from 'vue'
export default {
  name: 'HomeBanner',
  setup () {
    const sliders = ref([])
    const getfindBanner = async () => {
      const { result } = await findBanner()
      sliders.value = result
      console.log('sliders', sliders.value)
    }
    onMounted(() => {
      getfindBanner()
    })
    return { sliders }
  }

}
</script>
<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98
}
.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
