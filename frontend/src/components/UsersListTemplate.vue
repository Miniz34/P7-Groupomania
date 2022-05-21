<template>
  <!-- <div v-for="user in users" :key="user.id" v-bind="user" class="list-group">
    <div class="img-main-page">
      <img :src="user.avatar" alt="post img" class="main-img">
    </div>

    <a href="www.placeholder.com" class="list-group-item list-group-item-action">{{
        user.username
    }}
      userID :
      {{ user.id }}
    </a>
    <div>


    </div>
  </div> -->


  <router-link :to="{ name: 'SingleUser', params: { id } }">
    <p class="text-right fw-bold fs-3">{{ username }}</p>

    <div class="container">
      <div class="user">
        <div class="img-main-page">
          <img :src="avatar" alt="avatar" class="main-img">
        </div>

        <div class="col-md-6 details username">
          <h5>{{ username }}</h5>
        </div>


      </div>
    </div>
  </router-link>


</template>


<script>

export default {
  name: "user-list",
  props: ['username', 'avatar', 'id'],

}


</script>

<style scoped>
.container {
  margin-top: 40px;
  background-color: white;
}

.img-main-page {
  width: 100px;
  height: 100px;
}

.main-img {
  width: 100px;
  height: 100px;
}

.user {
  display: flex;
  justify-content: start;
}

.username {
  margin-left: 20px;
  align-self: center;
}
</style>


<!-- 
export default {
  name: "Publications-View",
  data() {
    return {
      users: {},
      // link: 'http://localhost:3000/api/user/get/'     à revoir

    };
  },
  created() {
    const options = {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    fetch("http://localhost:3000/api/users", options)
      .then((response) => response.json())
      .then(data => {
        const userlist = data.data
        this.users = userlist
        console.table(userlist);
        const imgUrl = `<img src = "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg"/>`
        this.users.avatar = imgUrl
      })


  }
} -->