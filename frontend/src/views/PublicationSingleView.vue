<template>
  <HeaderMainPage />
  <div class="Publications-View" id="Publications-View">
    <div class="container">
      <div class="well ">
        <div class="media">
          <div class="media-body">
            <h4 class="media-heading"></h4>
            <p class="text-right fw-bold fs-3"> {{ publications.title }}</p>
            <div class="card-img-top w-50 mx-auto" v-if="publications.image">
              <img :src="publications.image" alt="..." class="w-100" />
            </div>
            <p>{{ publications.content }}</p>
            <ul class="list-inline list-unstyled main-post">
              <li><span><i class="glyphicon glyphicon-calendar"></i> </span></li>
              <p>Publié par {{ publications.user.username }} le {{ new
                  Date(publications.createdAt).toLocaleString("fr-FR", { timeZone: "UTC" })
              }}</p>

            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="modify">
      <router-link :to="{ name: 'Modify', params: { id: this.$route.params.id } }">

        <button>Modifier publication</button>
      </router-link>
      <router-link :to="{ name: 'Modify', params: { id: this.$route.params.id } }">

        <button>Supprimer publication</button>
      </router-link>
    </div>


    <div class="well container">
      <h4><i class="fa fa-paper-plane-o"></i> Leave a Comment:</h4>
      <form role="form">
        <div class="form-group">
          <textarea v-model="comment" class="form-control" rows="3"></textarea>
        </div>
        <button v-on:click.prevent="SendComment" type="submit" value="" class="btn btn-primary"><i
            class="fa fa-reply"></i>
          Submit</button>
      </form>
    </div>
    <div v-for="comment in publications.comments" :key="comment.id" class="container">
      <h5><i class="commentaire"></i>Commentaire de {{ comment.user.username }}
        <small>{{ new Date(comment.createdAt).toLocaleString("fr-FR", { timeZone: "UTC" })
        }}</small>
      </h5>
      <p>{{ comment.commentaire }}</p>
    </div>
  </div>



</template>

<script>

import HeaderMainPage from "@/components/HeaderMainPage.vue"
const id = sessionStorage.getItem("userId")

export default {
  components: {
    HeaderMainPage
  },
  data() {
    return {
      publications: "",
      comment: "",
      image: ""
    }
  },
  async created() {
    const postId = this.$route.params.id;
    fetch(`http://localhost:3000/api/publications/` + postId)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.publications = data
      })
  },
  methods: {
    SendComment() {
      // const moment = require('moment');
      // const aujourdhui = moment();
      console.log("hello")
      fetch('http://localhost:3000/api/comments/', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // 'Authorization': "Bearer " + sessionStorage.getItem("Token")
        },
        body: JSON.stringify({
          publicationId: this.publications.id,
          commentaire: this.comment,
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
    }
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