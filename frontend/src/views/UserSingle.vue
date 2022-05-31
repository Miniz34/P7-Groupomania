<template>

  <HeaderMainPage></HeaderMainPage>

  <UserSingleTemplate v-for="x in user" :key="x" v-bind="x">

    <button>test</button>
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
      user: [],
      id: sessionStorage.getItem("userId"),
      admin: sessionStorage.getItem("isAdmin")
    }
  },

  created() {
    const userId = this.$route.params.id;

    fetch("http://localhost:3000/api/users/" + userId)
      .then((response) => response.json())
      .then(data => {
        this.user = data

        console.table(this.user);



      })

  },
  // methods: {
  //   deleteUser() {

  //     const userId = this.$route.params.id;
  //     fetch('http://localhost:3000/api/user/' + userId, {
  //       method: "DELETE",
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': "Bearer " + sessionStorage.getItem("Token")
  //       },

  //     })
  //       .then(() =>
  //         document.location.href = `http://localhost:8080/publications`)
  //   }
  // }


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