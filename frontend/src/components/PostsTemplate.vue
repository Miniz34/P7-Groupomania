<template>

  <main>
    <div class="container">
      <div class="img-container">
        <div class="img-main-page" v-if="image">
          <img :src="image" alt="post img" class="main-img">
        </div>
        <div class="img-main-page" v-else>
          <img src="http://localhost:3000/images/icon.png" alt="post img" class="main-img">
        </div>
      </div>
      <div class="content">
        <div class="title">
          <router-link :to="{ name: 'SinglePost', params: { id } }">
            <p class="text-right fw-bold fs-3">{{ title }}</p>
          </router-link>

        </div>
        <div class="text text-truncate text-wrap">
          {{ content }}
        </div>
        <div class="data">
          <div class="date">
            Publié par {{ user.firstname }} {{ user.lastname }} le {{ new
                Date(createdAt).toLocaleString("fr-FR", {
                  timeZone: "UTC"
                })
            }}


          </div>
          <div class="comments">
            {{ comments.length }} commentaires
          </div>
        </div>

      </div>

    </div>

  </main>


</template>

<script>

export default {
  name: "newPost",
  props: ['title', 'content', 'createdAt', 'comments', 'id', 'userId', 'user', 'firstname', 'lastname', 'image'],

}


</script>

<style scoped>
.container {
  background-color: white;
  height: 200px;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;


}

.img-container {
  width: 200px;
  margin-left: -12px;


}

.main-img {
  width: 200px;
  height: 200px;
}

.content {
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.data {
  display: flex;
  justify-content: start;
  margin-left: -25px;

}

.comments {
  margin-left: 25px;
}

.text {
  text-overflow: ellipsis;
  height: 100px;
  max-width: 80%;
}

.content {
  text-overflow: ellipsis;
}

.well {}
</style>
