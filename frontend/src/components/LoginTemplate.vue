<template>

  <form id="Login-View">
    <section class="d-flex flex-column main-form w-50 align-center main-form">
      <h2 class="col align-self-center">Connexion</h2>

      <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>
      <input v-model="dataLogin.username" class="form-control form-control-lg" type="text" placeholder="Username"
        aria-label=".form-control-lg example" id="username">
      <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
      <input v-model="dataLogin.password" class="form-control form-control-lg" type="text" placeholder="Password"
        aria-label=".form-control-lg example" id="password">
      <button @click.prevent="mounted" type="submit"
        class="btn btn-primary w-25 col align-self-center">Connexion</button>
      <p class="col align-self-center">Pas de compte ? vous pouvez vous inscrire <a href="/">ici</a></p>
    </section>
  </form>

</template>

<script>

export default {
  name: "Login-Template",
  data() {
    return {
      dataLogin: {
        username: "",
        password: "",
        id: ""
      }
    };
  },
  methods: {
    mounted() {
      if (this.dataLogin.username && this.dataLogin.password) {
        fetch("http://localhost:3000/api/users/login", {
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
            sessionStorage.setItem('userId', data.id)
            sessionStorage.setItem('isAdmin', data.isAdmin)
            console.log(data)
            document.location.href = `http://localhost:8080/publications`;
          })
      } else {
        alert("Veuillez remplir le formulaire d'inscription")
      }
    }
  }
}
</script>