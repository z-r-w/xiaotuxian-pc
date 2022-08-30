<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <div style="position: relative;height: 426px;" ref="target">
      <Transition name="fade">
        <ul v-if="goods.length" ref="pannel" class="goods-list">
          <li v-for="item in goods" :key="item.id">
             <RouterLink :to="`/product/${item.id}`">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{item.name}}</p>
            <p class="price">&yen;{{item.price}}</p>
          </RouterLink>
          </li>
        </ul>
         <HomeSkeleton v-else />
      </Transition>
    </div>
  </HomePanel>
</template>
<script>
import HomePanel from './home-panel.vue'
import { findNew } from '@/api/home'
import HomeSkeleton from './home-skeleton.vue'
import { useLazyData } from '@/hooks'

export default {
  name: 'HomeNew',
  components: { HomePanel, HomeSkeleton },
  setup () {
    // const goods = ref([])
    // findNew().then(data => {
    //   goods.value = data.result
    // })
    const { result, target } = useLazyData(findNew)
    return { goods: result, target }
  }
}
</script>
<style scoped lang="less">
@import url('~../../src/assets/styles/minixs.less');
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
