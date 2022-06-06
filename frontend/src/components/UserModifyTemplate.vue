<template>


  <form id="new-avatar" class="d-flex flex-column main-form w-50 align-center main-form " aria-label="Modifier-avatar">
    <h2 class="col align-self-center">Modification de l'avatar</h2>


    <div class="custom-file">
      <input type="file" name="inputFile" class="custom-file-input" id="inputFile" aria-describedby="inputFileAddon"
        @change="onFileChange" aria-label="choose-avatar" />
      <label class="custom-file-label" for="inputFile"></label>
    </div>
    <button @click.prevent="changeAvatar" type="submit" class="btn btn-primary w-25 col align-self-center"
      aria-label="Modifier-avatar">Modifier
      avatar</button>

  </form>


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
        userId: "",
        avatar: ""
      }
    };
  },
  methods: {
    changePwd() {
      if (this.repeatNewPwd && this.newPwd == this.repeatNewPwd) {
        fetch("http://localhost:3000/api/users/modify/" + this.$route.params.id,
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
          }).then(() => {
            alert('Mot de passe modifié')
          })

      } else {
        console.log("Les mots de passe ne sont pas identiques")
        alert("Les mots de passe ne sont pas identiques")
      }
    },
    changeAvatar() {

      let input = document.getElementById('inputFile')
      const fd = new FormData();
      fd.append("inputFile", input.files[0]);
      // const file = fd.get("inputFile")
      if (input.files[0]) {
        fetch("http://localhost:3000/api/users/modify/avatar/" + this.$route.params.id,
          {
            method: "PUT",
            body: fd,
            headers: {
              // 'Accept': 'application/json',
              // 'Content-Type': 'application/json',
              'Authorization': "Bearer " + sessionStorage.getItem("Token")
            }
          }).then(() => {
            alert("avatar modifié")
            document.location.href = `http://localhost:8080/users`
          })
      } else {
        alert("Veuillez sélectionner un avatar")
      }

    },
    onFileChange(e) {
      console.log(e);
      this.avatar = e.target.files[0] || e.dataTransfer.files;
      console.log(this.avatar);

    },
  }
}
</script>