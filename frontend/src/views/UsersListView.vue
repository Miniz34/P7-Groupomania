<template>

  <HeaderMainPage />
  <listUser />

  <p> {{ data }}</p>
</template>



<script>
import listUser from "../components/UsersListTemplate.vue";
import HeaderMainPage from "@/components/HeaderMainPage.vue";



export default {
  name: "test",
  components: {
    listUser,
    HeaderMainPage
  },
  data() {
    return {
      users: []
    }
  }

}

</script>