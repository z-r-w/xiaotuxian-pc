<template>
        <ul class="app-header-nav">
        <li class="home"><RouterLink to="/">首页</RouterLink></li>
        <!-- // eslint-disable-next-line vue/require-v-for-key -->
        <li v-for="item in list" :key="item.id" @mouseenter="show(item)" @mouseleave="hide(item)"><RouterLink @click="hide(item)" :to="`/category/${item.id}`">{{item.name}}</RouterLink>
        <div class="layer" :class="{open: item.open}">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <RouterLink :to="`/category/sub/${sub.id}`" @click="hide(item)">
              <img :src="sub.picture" alt="">
              <p>{{sub.name}}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
        </li>
      </ul>
<div>{{list.name}}</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()
    // 获取导航主页信息
    const list = computed(() => store.state.category.list)
    // 显示和隐藏主页头部导航
    const show = (item) => {
      // debugger
      store.commit('category/show', item)
    }
    const hide = (item) => {
      store.commit('category/hide', item)
    }
    // const list = lists.value
    console.log('list', list)
    return { list, show, hide }
  }
}
</script>

<style scoped lang='less'>
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      // > .layer {
      //      height: 132px;
      //      opacity: 1;
      // }
    }
  }
}
.layer {
   &.open {
           height: 132px;
           opacity: 1;
          }
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all .2s .1s;
  ul {
    display: flex;
    // flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
