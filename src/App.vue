<template>  
  
  <HelloWorld>
  </HelloWorld>
  {{ $store.state.user.email }}
</template>

<script>

import HelloWorld from './components/HelloWorld.vue';




export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log();
  }
}
</script>

<style>

</style>
