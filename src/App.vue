<template>
   <Fistcomponent
   />
     
    <Formcomponente
     
    />
 
</template>

<script>

import Fistcomponent from './components/FirstComponent.vue'
import Formcomponente from './components/FormComponente.vue'

export default {
  name: 'App',
  components: {
    Fistcomponent,
    Formcomponente,
  },
  data(){
    return{
      showForm:true,
      //quemsera:''
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
