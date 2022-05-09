<template>
  <form id="Auth-View">
    <section class="d-flex flex-column main-form w-50 align-center main-form">
      <input v-model="dataLogin.username" class=" form-control form-control-lg" type="text" placeholder="Username"
        aria-label=".form-control-lg example">
      <input v-model="dataLogin.password" class=" form-control form-control-lg" type="text" placeholder="Password"
        aria-label=".form-control-lg example">
      <button @click.prevent="mounted" type="submit" class="btn btn-primary">Submit</button>
    </section>
  </form>

  <button v-on:click="mounted">random button</button>
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
      // GET request using axios with error handling
      fetch("http://localhost:3000/api/user/auth", {
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

    }
  }
}
</script>