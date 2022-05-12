

<template>

  <HeaderMainPage />
  <h1> Liste des publications importées du component</h1>

  <Post v-for="publication in publications" :key="publication" :content="publication.content"
    :userId="publication.userId" :createdAt="publication.createdAt">
  </Post>

  <h2>Et en dessous le random formulaire</h2>

  <randomForm />

</template>


<script>

import Post from '@/components/PublicationTemplate.vue'
import randomForm from "@/components/randomForm.vue"
import HeaderMainPage from '@/components/HeaderMainPage.vue';

export default {
  name: "newPost",
  components: {
    Post,
    randomForm,
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
  }
}
</script>


