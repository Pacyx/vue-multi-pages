<style scoped>
@import '../../assets/signin/signin.css';
.lg{
    display: flex;
    align-items: center;
    height:100%;
}

.btnn{
    border-radius:0;
    box-shadow: 4px 4px 4px #ccc;
}
</style>

<template>
 <div class="lg text-center">
    <form class="form-signin">
        <img class="mb-4" src="../../assets/logo.png" alt="" width="100%" height="200">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="admin.user" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="admin.password" required>
        <div class="checkbox mb-3">
            <label>
            </label>
        </div>
        <button class="btnn btn btn-lg btn-primary btn-block" @click="checkSign">Login</button>
    </form>
 </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "signin",
  data(){
      return{
          eu:'edd@admin',
          eq:'123456',
          admin:{
              user:'',
              password:''
          }
      }
  },
  methods: {
      checkSign(e){
         e.preventDefault();
          if(this.admin.user==this.eu&&this.admin.password==this.eq){
            // this.$router.push({path:'/admin'})
           
          
            this.$cookie.set('statu', 'ture',{ expires: 7 })

          }else{
              axios.get('http://localhost:3000/')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            this.$cookie.set('statu', 'false',{ expires: 7 })
            alert("用户名或者密码不正确。")
          }
      }
  }
  

};
</script>
