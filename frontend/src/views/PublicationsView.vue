

<template>



  <HeaderMainPage />

  <a href="publications/new">Nouveau post</a>

  <Post v-for="publication in publications" :key="publication.id" v-bind="publication">


  </Post>
  <button v-on:click="OnePost"> test publication</button>




</template>


<script>




import Post from '@/components/PublicationTemplate.vue'
import HeaderMainPage from '@/components/HeaderMainPage.vue';

export default {
  name: "newPost",
  components: {
    Post,
    HeaderMainPage
  },
  data() {
    return {
      publications: []

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
      })

  },


}
</script>


