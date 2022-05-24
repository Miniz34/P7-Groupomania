<template>

  <form id="Login-View">
    <section class="d-flex flex-column main-form w-50 align-center main-form">
      <h2 class="col align-self-center">Modification de mot de passe</h2>

      <label for="newPwd" class="col-md-4 col-form-label text-md-right">Nouveau mot de passe</label>
      <input v-model="newPwd" class="form-control form-control-lg" type="password" placeholder="Nouveau mot de passe"
        aria-label=".form-control-lg example" id="newPwd">


      <label for="repeatNewPwd" class="col-md-4 col-form-label text-md-right">Répéter mot de passe</label>
      <input v-model="repeatNewPwd" class="form-control form-control-lg" type="password"
        placeholder="Répéter mot de passe" aria-label=".form-control-lg example" id="repeatNewPwd">



      <button @click.prevent="changePwd" type="submit" class="btn btn-primary w-25 col align-self-center">Modifier mot
        de
        passe</button>
      <p class="col align-self-center">Pas de compte ? vous pouvez vous inscrire <a href="/">ici</a></p>
    </section>
  </form>

</template>

<script>


let userId = sessionStorage.getItem("userId")
console.log(userId)


export default {
  name: "Login-Template",
  data() {
    return {
      dataLogin: {
        newPwd: "",
        repeatNewPwd: "",
        userId: ""
      }
    };
  },
  methods: {
    changePwd() {
      if (this.newPwd == this.repeatNewPwd) {
        console.log(this.repeatNewPwd)
        fetch("http://localhost:3000/api/users/modify/" + userId,
          {
            method: "PUT",
            body: JSON.stringify({
              repeatNewPwd: this.repeatNewPwd,
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + sessionStorage.getItem("Token")
            }
          })
      } else {
        console.log("Les mots de passe ne sont pas identiques")
      }
    }
  }
}
</script>