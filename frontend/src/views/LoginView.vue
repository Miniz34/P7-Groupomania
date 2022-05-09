<template>
  <form id="Login-View">
    <section class="d-flex flex-column main-form w-50 align-center main-form">
      <input class="form-control form-control-lg" type="text" placeholder="Username"
        aria-label=".form-control-lg example">
      <input class="form-control form-control-lg" type="text" placeholder="Password"
        aria-label=".form-control-lg example">
      <button v:on:click="logIn" type="submit" class="btn btn-primary">Submit</button>
    </section>
  </form>
</template>


<script>

import axios from 'axios';


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
      // GET request using axios with error handling
      axios.get("http://localhost:3000/api/user/auth",
        { username: "gérard", }
      )
        .then(function (response) {
          this.publications = response.data
        }.bind(this));

    },
  }
}

</script>