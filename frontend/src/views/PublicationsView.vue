
<template>


  <publicationComp />
</template>

<script>



import publicationComp from "@/components/publicationComp.vue";

export default {
  name: "publicationView",
  components: {
    publicationComp,
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