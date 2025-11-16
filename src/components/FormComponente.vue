<template>
    <body>
        
    </body>
    <div>
        <form class="form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <br>
            <label for="message">senha:</label>
            <input type="password" id="senha" name="senha">
            <br>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>
<script>
export default {
    name: 'FormComponente',
    data() {
        return {
          
        };
    },
}

</script>
<style>
  .form{
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

  }  
    body {
        margin: 0;
       
    }
</style>