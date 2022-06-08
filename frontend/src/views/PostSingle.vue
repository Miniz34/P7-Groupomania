<template>
  <HeaderMainPage />
  <div class="Publications-View" id="Publications-View">
    <div class="container">
      <div class="well ">
        <div class="media">
          <div class="media-body">
            <h4 class="media-heading text-center fw-bold fs-3">{{ publications.title }}</h4>
            <div class="card-img-top w-50 mx-auto" v-if="publications.image">
              <img :src="publications.image" alt="image publication" class="w-100" />
            </div>
            <p class="post-content">{{ publications.content }}</p>
            <ul class="list-inline list-unstyled main-post date">
              <li><span><i class="glyphicon glyphicon-calendar"></i> </span></li>
              <p>Publié par <router-link :to="{ name: 'SingleUser', params: { id: 1 } }">
                  {{ firstname }} {{ lastname }}
                </router-link> le {{ new
                    Date(publications.createdAt).toLocaleString("fr-FR", { timeZone: "UTC" })
                }}</p>

            </ul>

          </div>
        </div>
      </div>
    </div>

    <div class="modify container">
      <router-link :to="{ name: 'Modify', params: { id: this.$route.params.id } }">

        <button v-if="id == this.publications.userId || admin == `true`" class=" btn btn-warning btn-sm">Modifier
          publication</button>
      </router-link>

      <button v-if="id == this.publications.userId || admin == `true`" @click="deletePost"
        class="btn btn-danger btn-sm">Supprimer
        publication</button>

    </div>

  </div>


  <h4><i class="fa fa-paper-plane-o"></i> Commentaires</h4>

  <form role="form">


    <div class="form-group">
      <label for="comment" class="label-comment"> Rédiger un commentaire</label>
      <textarea v-model="comment" class="comment-input" rows="3" name="comment" id="comment"></textarea>

    </div>
    <button v-on:click.prevent="SendComment" type="submit" value="" class="btn btn-primary btn-sm"><i
        class="fa fa-reply" id="comment"></i>
      Envoyer commentaire</button>
  </form>


  <div class="well  commentaire-view">


    <div v-for="comment in publications.comments" :key="comment.id" class="single-comment">

      <p class="commentaire-content">{{ comment.commentaire }}</p>
      <p><i class="commentaire"></i>Commentaire de <router-link
          :to="{ name: 'SingleUser', params: { id: comment.userId } }">{{
              comment.user.firstname
          }} {{ comment.user.lastname }} </router-link> le
        <small>{{ new Date(comment.createdAt).toLocaleString("fr-FR", { timeZone: "UTC" })
        }}</small>
      </p>
      <router-link :to="{ name: 'ModifyComment', params: { id: comment.id } }">
        <button v-if="id == comment.userId || admin == `true`" class="btn btn-warning btn-sm modif-comment"> Modifier
          commentaire
        </button>
      </router-link>
    </div>
  </div>



</template>

<script>

import HeaderMainPage from "@/components/HeaderMainPage.vue"
// import PostSingleTemplate from '@/components/PostSingleTemplate'
// let id = sessionStorage.getItem("userId")
// console.log(id)




export default {
  components: {
    HeaderMainPage,
    // PostSingleTemplate
  },
  data() {
    return {
      publications: {},
      comments: "",
      // image: "",
      firstname: "",
      id: sessionStorage.getItem("userId"),
      admin: sessionStorage.getItem("isAdmin")
    }
  },
  created() {


    const postId = this.$route.params.id;
    console.log(postId);
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
        this.firstname = this.publications.user.firstname
        this.lastname = this.publications.user.lastname

        // console.log(this.publications)



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
          commentaire: this.comment,
          userId: this.id
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
.Publications-View {
  background-color: rgb(231, 231, 231);
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
}

.commentaire-view {
  background-color: rgb(212, 212, 212);
  width: 100%;

}

.single-comment {

  background-color: rgb(231, 231, 231);
  margin-bottom: 20px;
  align-content: center;
  padding-left: 20px;
  padding-top: 40px;


}

.date {
  margin-bottom: -30px
}

.post-content {
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 1.2rem;
}




.label-comment {
  display: flex;
  font-size: 1.4rem;
}

.modif-comment {
  margin-top: -10px;
  margin-bottom: 50px;
}

.commentaire {
  font-size: 1rem;

}

.commentaire-content {
  font-size: 1.4rem;
  margin-top: -20px;
}
</style>