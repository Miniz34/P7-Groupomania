<template>
  <form id="Auth-View" enctype="multipart/form-data" method="post">

    <div class="container col align-self-center">
      <div class="row" id="row_style">
        <h4 class="text-center">Modifier commentaire</h4>
        <div class="col-md-4   col-md-offset-4">
          <textarea id="commentaire" v-model="commentaire" class="form-control form-control-lg" type="text" cols="30"
            rows="10"></textarea>
          <br>
          <div class="form-group">

            <button v-on:click.prevent="modifyComment" class="btn btn-primary" id="submit">Envoyer nouveau
              commentaire</button>
            <button @click.prevent="deleteComment" class="btn btn-primary" id="submit">Supprimer
              commentaire</button>
          </div>
        </div>
      </div>


    </div>
  </form>


</template>

<script>

export default {
  name: "Comment-Template",

  data() {
    return {
      comments: {
        commentaire: "",
        publicationId: "",
        userId: ""

      }
    }
  },
  // mounted() {
  //   const commentId = this.$route.params.id;
  //   fetch('http://localhost:3000/api/comments/' + commentId, {
  //     method: "GET",
  //     headers: {
  //       // 'Accept': 'application/json',
  //       // 'Content-Type': 'application/json',
  //       'Authorization': "Bearer " + sessionStorage.getItem("Token")
  //     },


  //   }).then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       this.commentaire = data

  //     })
  // },

  methods: {
    modifyComment() {
      const commentId = this.$route.params.id;
      // const fd = new FormData();
      // fd.append("commentaire", this.commentaire);
      fetch('http://localhost:3000/api/comments/' + commentId, {
        method: "PUT",
        body: JSON.stringify({ commentaire: this.commentaire }),
        headers: {
          // 'Accept': 'application/json',
          // 'Content-Type': 'application/json',
          'Authorization': "Bearer " + sessionStorage.getItem("Token")
        },

      })
      // .then(console.log("test récup", fd.get("commentaire")))

    },

    deleteComment() {
      const commentId = this.$route.params.id;
      fetch('http://localhost:3000/api/comments/' + commentId, {
        method: "DELETE",
        headers: {
          // 'Accept': 'application/json',
          // 'Content-Type': 'application/json',
          'Authorization': "Bearer " + sessionStorage.getItem("Token")
        },
      })
    }
  }
}

</script>

<style>
</style>