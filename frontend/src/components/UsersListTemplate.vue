<template>
  <div v-for="user in users" :key="user" class="list-group">

    <a href="www.placeholder.com" class="list-group-item list-group-item-action">{{
        user.username
    }}
      userID :
      {{ user.id }}
    </a>

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
      })


  }
}

</script>