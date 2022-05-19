<template>
  <div v-for="user in users" :key="user" :img-src="user.avatar" class="list-group">

    <a href="www.placeholder.com" class="list-group-item list-group-item-action">{{
        user.username
    }}
      userID :
      {{ user.id }}
    </a>
    <div>

      <img src="`{{user.avatar}}`" />

    </div>
  </div>

</template>


<script>


export default {
  name: "Publications-View",
  data() {
    return {
      users: {},
      // link: 'http://localhost:3000/api/user/get/'     à revoir

    };
  },
  created() {
    // http://localhost:3000/api/publications/all
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
}

</script>