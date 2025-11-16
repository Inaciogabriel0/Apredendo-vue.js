<template>
  <body>
    <div
     v-for="(obj, index) in baba"
     
    v-bind:key="obj.id"
    >   
    {{ index }} - {{ obj.nome }} - {{ obj.idade }} - {{ obj.numero }}

    </div>
  </body>
  <header class="header">
    <h1></h1>
  </header>
</template>

<script>
export default {
  name: 'FirstComponent',
  data() {
    return {
      baba: [
        {
          "id": 1,
          "nome": 'isaac',
          "idade": 16
          ,"numero": 55_84987654321
        },
        {
          "id": 2,
          "nome": 'inacio',
          "idade": 22,
          "numero": 55_8412345678
        }
      ]
    };
  },
}
</script>

<style>
.header {
  background-color: #42b983;
  padding: 10px;
  color: white;
  text-align: center;
  margin-top: -60px;
  width: 100%;

}
body {
  margin: 0;
  background-color: #42b983;
}
</style>
