<template >
    <body>
         <form class="form">
            <h1>Cadastro</h1>
            <label  for="name">Nome:</label>
            <input v-model="name" type="text" id="name" name="name">
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <br>
            <label for="message">senha:</label>
            <input type="password" id="senha" name="senha">
            <br>
            <button @click="cadastrar" >cadastre se</button>
       </form>
    </body>
</template>
<script>
export default {
    name : 'HomePage',

    data() {
        return {
            name: "",
        };
    },
    methods: {
        cadastrar() {
           if (this.name.trim() !== ''){
            this.$router.push("/login");
           }else{
            alert("Por favor, preencha o campo nome.");
           }
        }
    },
}
</script>
<style>
    body {
        background-color: #652ba7;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px; 
        position: relative;
        margin-top: 10%;
        background-color: white;
        border-radius: 5%;
        box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }
    h1{
        text-align: center;
        color: #6e378d;
    }
    button{
            margin-top: 10px;
            padding: 10px;
            background-color: #6e378d;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
    }
</style>