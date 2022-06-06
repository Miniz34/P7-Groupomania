<template>

  <HeaderMainPage />
  <UserModifyTemplate />

</template>


<script>

// import axios from 'axios';

import HeaderMainPage from "@/components/HeaderMainPage.vue";
import UserModifyTemplate from "@/components/UserModifyTemplate.vue";



export default {
  name: "Login-View",
  data() {
    return {
    };
  },
  components: { HeaderMainPage, UserModifyTemplate },


}



</script>