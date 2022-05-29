

<template>



  <HeaderMainPage />

  <a href="publications/new" class="btn btn-primary w-25 new-post">Nouveau post</a>

  <Post v-for="publication in publications" :key="publication.id" v-bind="publication">


  </Post>



</template>


<script>



import Post from '@/components/PublicationTemplate.vue'
import HeaderMainPage from '@/components/HeaderMainPage.vue';

export default {
  name: "newPost",
  components: {
    Post,
    HeaderMainPage,
  },
  data() {
    return {
      publications: [],
      user: []
    };
  },
  created() {
    // http://localhost:3000/api/publications/all
    const options = {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + sessionStorage.getItem("Token")
      }
    }
    fetch("http://localhost:3000/api/publications/", options)
      .then((response) => response.json())
      .then(data => {
        this.publications = data
        console.table(data);
        const test = data.id
        console.table(test)
        const test2 = this.publications.user
        console.log(test2)

      })

  },



}
</script>


<style scoped>
.new-post {
  margin: 4%;
}
</style>