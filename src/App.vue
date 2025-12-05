<template>  
 <div>
    <HelloWorld />
    <p>Nome atual: {{ $store.state.user.name }}</p>
    <p>idade atual: {{ $store.state.user.idade }}</p>

    <form @submit.prevent="atualizar">
      <input 
        v-model="name" 
        type="text" 
        placeholder="Digite o novo nome"
      >
      <input 
      v-model.number="idade"
      type="number"
      placeholder="digite sua idade"
      >
      <button type="submit">Alterar Nome</button>
    </form>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue';




export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data() {
    return {
     name: '',
     idade: ''

    }
  },
  methods: {
    atualizar(){
      const newUser = {
      name: this.name,
      idade: this.idade
      }
    this.$store.commit('storeUser', newUser)
    
}
}
};
</script>

<style>

</style>
