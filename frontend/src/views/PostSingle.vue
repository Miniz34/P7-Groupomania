<template>
  <HeaderMainPage />
  <PostSingleTemplate v-bind="publications" />




</template>

<script>

import HeaderMainPage from "@/components/HeaderMainPage.vue"
import PostSingleTemplate from '@/components/PostSingleTemplate'
let id = sessionStorage.getItem("userId")
console.log(id)




export default {
  components: {
    HeaderMainPage,
    PostSingleTemplate
  },
  data() {
    return {
      publications: {},
      comment: "",
      image: "",
      username: "",
      id: sessionStorage.getItem("userId"),
      admin: sessionStorage.getItem("isAdmin")
    }
  },
  created() {


    const postId = this.$route.params.id;
    fetch(`http://localhost:3000/api/publications/` + postId, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + sessionStorage.getItem("Token")
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.publications = data
        console.log(this.publications)



      })

  },
  methods: {
    SendComment() {
      // const moment = require('moment');
      // const aujourdhui = moment();
      let input = document.getElementById('comment')
      console.log(input.value)
      fetch('http://localhost:3000/api/comments/', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + sessionStorage.getItem("Token")
        },
        body: JSON.stringify({
          publicationId: this.publications.id,
          commentaire: "hello",
          userId: id
        })
      }).then(
        alert("votre commentaire a été publié"))
      location.reload()
      const test = this.publications.id
      console.log(test)
        .catch((error) => {
          console.log(error + "message d'erreur filler")
        })
    },
    deletePost() {
      const postId = this.$route.params.id;
      fetch('http://localhost:3000/api/publications/' + postId, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + sessionStorage.getItem("Token")
        },

      })
        .then(() =>
          document.location.href = `http://localhost:8080/publications`)


    },

  },


}

</script>

<style>
.date {
  margin-left: 25px
}

.comment {
  margin-bottom: 20px
}
</style>