<template>
  <div class="container">
    <h1>App{{$store.state.user.profile.id}}</h1>
    <button @click="$store.commit('user/setUser', {id: '1234'})">测试</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
