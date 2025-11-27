<template>
  <div>
    <slot>  
      <header>  
        <h1>Hello World Component</h1>

      </header>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}
</style>
