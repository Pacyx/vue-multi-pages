<template>
<div id="lh">
    <div id="example-5">
  <select v-model="selected1">
    <option value="x">请选择</option>
    <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option>
  </select>
  <span>Selected: {{ selected1 }}</span>
  <button @click="checkselect()"> 按钮</button>
</div>
</div>  
</template>
<script>
    export default {
        name:'lh',
        data () {
            return {
                selected1: 'a'
            }
              
        },
        methods: {
           checkselect(){
               var ss=this.selected1
               console.log(ss)
           }
        }
    }
</script>

<style scoped>
.lg{
    font-size: 25px;
    color: #57a3f3;
}
</style>

