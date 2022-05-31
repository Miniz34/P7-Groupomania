<template>
  <div class="Publications-View" id="Publications-View">
    <div class="container">
      <div class="well ">
        <div class="media">
          <div class="media-body">
            <h4 class="media-heading"></h4>
            <p class="text-right fw-bold fs-3"> {{ title }}</p>
            <div class="card-img-top w-50 mx-auto" v-if="image">
              <img :src="image" alt="image publication" class="w-100" />
            </div>
            <p>{{ content }}</p>
            <ul class="list-inline list-unstyled main-post">
              <li><span><i class="glyphicon glyphicon-calendar"></i> </span></li>
              <p>Publié par {{ username }} le {{ new
                  Date(createdAt).toLocaleString("fr-FR", { timeZone: "UTC" })
              }}</p>

            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modify container">
    <router-link :to="{ name: 'Modify', params: { id: this.$route.params.id } }">

      <button v-if="userid == this.userId || admin == `true`" class=" btn btn-warning btn-sm">Modifier
        publication</button>
    </router-link>

    <button v-if="userid == this.userId || admin == `true`" @click="this.$parent.deletePost()"
      class="btn btn-danger btn-sm">Supprimer
      publication</button>










  </div>


  <div class="well container">
    <h4><i class="fa fa-paper-plane-o"></i> Leave a Comment:</h4>
    <form role="form">
      <div class="form-group">
        <textarea v-model="comment" class="form-control" rows="3"></textarea>
      </div>
      <button v-on:click.prevent="this.$parent.SendComment()" type="submit" value="" class="btn btn-primary btn-sm"><i
          class="fa fa-reply" id="comment"></i>
        Envoyer commentaire</button>
    </form>
  </div>
  <div v-for="x in comments" :key="x" class="container">
    <h5><i class="commentaire"></i>Commentaire de {{ x.user.username }}
      <small>{{ new Date(x.createdAt).toLocaleString("fr-FR", { timeZone: "UTC" })
      }}</small>
    </h5>
    <p>{{ x.commentaire }}</p>
    <router-link :to="{ name: 'ModifyComment', params: { id: x.id } }">
      <button v-if="userid == x.userId || admin == `true`" class="btn btn-warning btn-sm"> Modifier commentaire
      </button>
    </router-link>
  </div>

  <button @click="test">test</button>


</template>

<script>

export default {
  name: "singlePost",
  props: ['title', 'content', 'createdAt', 'comments', 'id', 'userId', 'user', 'username', 'image',],
  data() {
    return {
      userid: sessionStorage.getItem("userId"),
      admin: sessionStorage.getItem("isAdmin")
    }

  },
  methods: {
    test() {
      let zeub = sessionStorage.getItem("userId")
      console.log(zeub)
      let zeub2 = this.comments.userId
      console.log(zeub2)
    }
  }

}


</script>