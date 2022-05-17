<template>

  <head>
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" />
  </head>


  <div class="Publications-View" id="Publications-View">
    <div class="container">
      <div class="well ">
        <div class="media">
          <!-- <a class="pull-left" href="#">
            <img class="media-object" src="http://placekitten.com/150/150">
          </a> -->
          <div class="media-body">
            <h4 class="media-heading"></h4>
            <!-- <button v-on:click="OnePost"> <a href="/publications/{{route.params.id}}"> hello</a></button> -->
            <router-link :to="{ name: 'SinglePost', params: { id } }">
              <p class="text-right fw-bold fs-3">{{ title }}</p>
            </router-link>


            <p>{{ content }} </p>
            <ul class="list-inline list-unstyled main-post">
              <li> <span class="post__date">Publié par {{ user.username }} le {{ new
                  Date(createdAt).toLocaleString("fr-FR", {
                    timeZone: "UTC"
                  })
              }}</span>
              </li>
              <!-- <span><i class="glyphicon glyphicon-comment"></i> {{ comments.length }} </span> -->

            </ul>
          </div>
          <p>{{ comments.length }} commentaires</p>
        </div>
      </div>
      <div>
      </div>


    </div>
  </div>
</template>

<script>

export default {
  name: "newPost",
  props: ['title', 'content', 'createdAt', 'comments', 'id', 'userId', 'user', 'username'],

}


</script>

<style>
.well {
  margin-top: 50px;
  background-color: white;
}

.main-post {
  display: flex;
}

.post {
  width: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  padding: 20px;
  background: #FFEEE4;
  margin: 10px;
}

#Publications-View {
  margin-bottom: 100px;

}
</style>
