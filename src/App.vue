<template>
  
  <router-view>

  </router-view>

  
  <button @click="login()">Go</button>
  
</template>

<script>



export default {
  name: 'App',
  components: {
   
    
  },
  methods: {
    login(){
      this.$router.push('/hello')
    }
  }
  
}
</script>

<style>
.hello {
  font-size: 20px;
  
}
</style>
