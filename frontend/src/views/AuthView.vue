<template>
  <form id="Auth-View">
    <section class="d-flex flex-column main-form w-50 align-center main-form">
      <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>
      <input v-model="dataLogin.username" class=" form-control form-control-lg" type="text" placeholder="Username"
        aria-label=".form-control-lg example" id="username">
      <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
      <input v-model="dataLogin.password" class=" form-control form-control-lg" type="text" placeholder="Password"
        aria-label=".form-control-lg example" id="password">
      <!-- <div class="valid-feedback">
        Looks good!
      </div> -->

      <button @click.prevent="mounted" type="submit" class="btn btn-primary">Submit</button>
    </section>
  </form>

</template>


<script>




// import axios from 'axios';

// import { json } from "body-parser";



export default {
  name: "Auth-View",
  data() {
    return {
      dataLogin: {
        username: "",
        password: ""
      }

    };
  },

  methods: {
    mounted() {


      if (this.dataLogin.username && this.dataLogin.password) {
        fetch("http://localhost:3000/api/users/auth", {
          method: "POST",
          body: JSON.stringify({
            username: this.dataLogin.username,
            password: this.dataLogin.password
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then((response) => response.json())

      } else {
        alert("Veuillez remplir le formulaire d'inscription")
      }
    }
  }
}
</script>