<template>

  <HeaderLogin />
  <LoginTemplate />

</template>


<script>

// import axios from 'axios';
import HeaderLogin from "@/components/HeaderLogin.vue";
import LoginTemplate from "@/components/LoginTemplate.vue";


export default {
  name: "Login-View",
  data() {
    return {
    };
  },
  components: { HeaderLogin, LoginTemplate },


}



</script>