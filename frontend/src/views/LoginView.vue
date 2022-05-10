<template>
  <form id="Login-View">
    <section class="d-flex flex-column main-form w-50 align-center main-form">
      <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>
      <input v-model="dataLogin.username" class="form-control form-control-lg" type="text" placeholder="Username"
        aria-label=".form-control-lg example" id="username">
      <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
      <input v-model="dataLogin.password" class="form-control form-control-lg" type="text" placeholder="Password"
        aria-label=".form-control-lg example" id="password">
      <button @click.prevent="mounted" type="submit" class="btn btn-primary">Submit</button>
    </section>
  </form>
</template>


<script>

// import axios from 'axios';



export default {
  name: "Login-View",
  data() {
    return {
      dataLogin: {
        username: "",
        password: "",
      }
    };
  },
  methods: {
    mounted() {
      if (this.dataLogin.username && this.dataLogin.password) {
        fetch("http://localhost:3000/api/user/login", {
          method: "POST",
          body: JSON.stringify({
            username: this.dataLogin.username,
            password: this.dataLogin.password
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(response => response.json())
          .then(data => {
            sessionStorage.setItem('Token', data.newToken)
            document.location.href = `http://localhost:8080/publications`;

          })




      } else {
        alert("Veuillez remplir le formulaire d'inscription")
      }
    },


    ////récupération base de donnée
    test() {
      fetch("http://localhost:3000/api/user/get")
        .then(response => response.json())
        .then(data => {
          console.log(data)

          for (let i in data) {

            // ----Affichage des éléments du panier -----
            let username = data[1]
            let username2 = data[i].id
            console.log(username)
            console.log(username2)
          }



        })
    }
  }

}

</script>