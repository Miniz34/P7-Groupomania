<template>

  <HeaderLogin />
  <AuthTemplate />

</template>


<script>


import HeaderLogin from "@/components/HeaderLogin.vue";
import AuthTemplate from "@/components/AuthTemplate.vue";

// import axios from 'axios';

// import { json } from "body-parser";



export default {




  name: "Auth-View",
  components: { HeaderLogin, AuthTemplate },

}
</script>