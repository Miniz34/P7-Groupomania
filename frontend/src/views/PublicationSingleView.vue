<template>
  <HeaderMainPage />


  <div class="Publications-View" id="Publications-View">
    <div class="container">
      <div class="well ">
        <div class="media">
          <!-- <a class="pull-left" href="#">
            <img class="media-object" src="http://placekitten.com/150/150">
          </a> -->
          <div class="media-body">
            <h4 class="media-heading"></h4>
            <p class="text-right fw-bold fs-3"> {{ publications.title }}</p>
            <p>{{ publications.content }}</p>
            <ul class="list-inline list-unstyled main-post">
              <li><span><i class="glyphicon glyphicon-calendar"></i> </span></li>

              <!-- <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span> -->
              <p>{{ createdAt }}</p>

            </ul>
          </div>
        </div>
      </div>




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
      <h5><i class=""></i> {{ comment.userId }}
        <small> {{ commentCreatedAt }}</small>
      </h5>
      <p>{{ comment.commentaire }}</p>
    </div>

  </div>

</template>

<script>

// import moment from 'moment'

import HeaderMainPage from "@/components/HeaderMainPage.vue"


const moment = require('moment');
moment.locale('fr')
export default {
  components: {
    HeaderMainPage
  },

  data() {
    return {
      publications: "",
      comment: ""
    }
  },
  // computed: {
  //   publicationId() {
  //     return parseInt(this.$route.params.id)
  //   },



  // },

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
      const postId = this.$route.params.id;
      fetch('http://localhost:3000/api/comments/', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // 'Authorization': "Bearer " + sessionStorage.getItem("Token")
        },
        body: JSON.stringify({
          publicationId: this.publications.id,
          commentaire: this.comment
        })
      })
      console.log(postId)

    }
  },
  computed: {
    createdAt: function () {

      const testdate = this.publications.createdAt
      return moment(testdate).format('Do MMM YYYY - LTS')

    },
    commentCreatedAt: function () {

      const testdate = this.publications.comments[0].createdAt
      console.log(testdate)
      return moment(testdate).format('Do MMM YYYY - LTS')

      // new Date(post.createdAt).toLocaleString("fr-FR", { timeZone: "UTC" })

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