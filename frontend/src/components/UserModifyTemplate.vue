<template>


  <form id="new-avatar" class="d-flex flex-columnw-50 align-center" aria-label="Modifier-avatar">



    <div class="main-user-single">
      <div v-if="this.avatar" class="thumbnail">
        <p class="text-center">Aperçu de l'avatar</p>
        <img class="img-user-single" :src="this.avatar" alt="avatar utilisateur" />
      </div>
      <h2 class="col align-self-center">Modification de l'avatar</h2>


      <div class="custom-file">
        <label class="custom-file-label hidden" for="inputFile">File</label>
        <input type="file" name="inputFile" class="custom-file-input" id="inputFile" aria-describedby="inputFile"
          @change="onFileChange" ref="fileInput" />

      </div>
      <button @click.prevent="changeAvatar" type="submit" class="btn btn-primary w-50 col align-self-center"
        aria-label="Modifier-avatar">Modifier
        avatar</button>

    </div>

  </form>


  <form id="Login-View">
    <section class="d-flex flex-column  w-50 align-center modify-pwd">
      <h2 class="col align-self-center">Modification de mot de passe</h2>

      <label for="newPwd" class="col-md-4 col-form-label text-md-right">Nouveau mot de passe</label>
      <input v-model="newPwd" class="form-control form-control-lg modif-pw" type="password"
        placeholder="Nouveau mot de passe" aria-label=".form-control-lg example" id="newPwd">


      <label for="repeatNewPwd" class="col-md-4 col-form-label text-md-right">Répéter mot de passe</label>
      <input v-model="repeatNewPwd" class="form-control form-control-lg modif-pw" type="password"
        placeholder="Répéter mot de passe" aria-label=".form-control-lg example" id="repeatNewPwd">



      <button @click.prevent="changePwd" type="submit" class="btn btn-primary col align-self-center">Modifier mot
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
      },
      avatar: ""
    };
  },
  created() {

    {
      const postId = this.$route.params.id;
      console.log(postId);
      fetch(`http://localhost:3000/api/users/` + postId, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + sessionStorage.getItem("Token")
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.dataLogin = data
          this.avatar = this.dataLogin.data.avatar
          console.log(this.avatar)
          console.log(this.dataLogin.data.avatar)




        })
    }
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
    onFileChange() {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.avatar = e.target.result
        }
        reader.readAsDataURL(files[0])
      }
    }
  }
}
</script>


<style scoped>
.modify-avatar {

  background-color: rgb(231, 231, 220);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 500px;
  height: 750px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 50px;

}

.avatar-img {
  width: 100%;
}

.modify-pwd {
  margin: auto;
  margin-bottom: 50px;
}
</style>