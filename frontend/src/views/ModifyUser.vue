<template>

  <HeaderMainPage />
  <ModifyUser />

</template>


<script>

// import axios from 'axios';

import HeaderMainPage from "@/components/HeaderMainPage.vue";
import ModifyUser from "@/components/ModifyUser.vue";



export default {
  name: "Login-View",
  data() {
    return {
    };
  },
  components: { HeaderMainPage, ModifyUser },


}



</script>