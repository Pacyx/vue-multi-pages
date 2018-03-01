<template>
  <div id="loginform">
      <lhead></lhead>
      <lform></lform>
  </div>
</template>
<script>
  import  Lform from '../../components/login/Form'
  import Lhead from '../../components/login/header'
    export default {
      name: 'loginform',
      components: {
        Lform,
        Lhead
      }
    }
</script>
