<template>
  <div id="app">
     <!-- <login-form></login-form> -->
     <router-view/>
     <img src="../../assets/logo.png">

  </div>
</template>

<script>
// import LoginForm from '../../modules/login/LoginForm'

export default {
  name: 'App',
  components: {
      // LoginForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
