<style scoped>
#loginform{
  height: 100%;
}
</style>

<template>
  <div id="loginform">
      <lform></lform>
  </div>
</template>
<script>
  import  Lform from '../../components/login/Form'
    export default {
      name: 'loginform',
      components: {
        Lform
      }
    }
</script>
