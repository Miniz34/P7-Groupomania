<template>

  <HeaderMainPage></HeaderMainPage>

  <UserSingleTemplate v-for="x in user" :key="x" v-bind="x">
  </UserSingleTemplate>



</template>


<script>

import UserSingleTemplate from "@/components/UserSingleTemplate.vue";
import HeaderMainPage from "@/components/HeaderMainPage.vue";

export default {
  components: {
    UserSingleTemplate,
    HeaderMainPage,
  },
  data() {
    return {
      user: []
    }
  },

  created() {
    const postId = this.$route.params.id;

    fetch("http://localhost:3000/api/users/" + postId)
      .then((response) => response.json())
      .then(data => {
        this.user = data

        console.table(this.user);



      })
    // .then(
    //   fetch("http://localhost:3000/api/users/data" + postId)
    //     .then((response) => response.json())
    //     .then(data => {

    //       console.log(data)
    //     })

    // )
  }


}


</script>


<style scoped>
</style>

<!-- 
 userData: {
        user: {
          username: "",
          id: ""

        },
        comments: "",
        publications: ""
      } -->