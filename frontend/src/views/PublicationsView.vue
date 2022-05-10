
<template>

  <h1> Liste des publications importées du component</h1>

  <publicationComp />

  <h2>Et en dessous le random formulaire</h2>

  <randomForm />
</template>

<script>



import publicationComp from "@/components/publicationComp.vue";
import randomForm from "@/components/randomForm.vue"

export default {
  name: "publicationView",
  components: {
    publicationComp,
    randomForm
  }
}
</script>











   // created() {
    //   // http://localhost:3000/api/publications/all
    //   axios.get("http://localhost:3000/api/publications/")
    //     .then(function (response) {
    //       this.publications = response.data
    //       console.log(response)
    //     }.bind(this));

    // },
 //   async mounted() {
    //     const res = await fetch('http://localhost:3000/api/publication/get')
    //     const data = await res.json()
    //     this.publication = data
    //   },
    //   testClick() {
    //     const test = console.log("bonjours")
    //     return test
    //   },

    //   loadUsers() {
    //     axios.get('http://localhost:3000/api/publication/get')
    //       .then(function (response) {
    //         this.publication = response.data;
    //       }.bind(this));
    //   }
    // }