 <template>



  <form id="Auth-View" enctype="multipart/form-data" method="post">

    <section class="d-flex flex-column main-form w-50 align-center main-form">
      <h2 class="col align-self-center">Inscription</h2>
      <label for="firstname" class="col-md-4 col-form-label text-md-right">First Name</label>
      <input v-model="dataLogin.firstname" class="form-control form-control-lg" type="text" placeholder="firstname"
        id="firstname" aria-describedby="firstname">
      <label for="lastname" class="col-md-4 col-form-label text-md-right">Last Name</label>
      <input v-model="dataLogin.lastname" class="form-control form-control-lg" type="text" placeholder="lastname"
        id="lastname" aria-describedby="lastname">

      <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
      <input v-model="dataLogin.email" class="form-control form-control-lg" type="email" placeholder="email" id="email"
        aria-describedby="email">

      <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
      <input v-model="dataLogin.password" class=" form-control form-control-lg" type="password" placeholder="Password"
        id="password" aria-describedby="password">
      <label for="repeatPassword" class="col-md-4 col-form-label text-md-right">Repeat Password</label>
      <input v-model="dataLogin.repeatPassword" class=" form-control form-control-lg" type="password"
        placeholder="repeat Password" id="repeatPassword" aria-describedby="repeatPassword">

      <!-- <div class="custom-file">
        <input name="inputFile" type="file" accept="image/*" class="custom-file-input" id="inputFile"
          @change="onFileChange" />
        <label class="custom-file-label" for="inputFile">Choose file</label>
        <button @click="onSubmit">Upload</button>
      </div> -->

      <div v-if="isVisibleRegex" class="alert alert-danger" role="alert">
        Votre mot de passe doit avoir entre 3 et 16 caractères, au moins 1 majuscule, 1 minuscule et 1 chiffre
      </div>
      <div v-if="isVisibleEmpty" class="alert alert-danger" role="alert">
        Veuillez remplir les champs "Prénom", "Nom", "Email" et "Password"
      </div>
      <div v-if="isVisibleRepeat" class="alert alert-danger" role="alert">
        Vos mots de passes de correspondent pas
      </div>
      <!-- <div class="valid-feedback">
        Looks good!
      </div> -->

      <button @click.prevent="mounted" type="submit"
        class="btn btn-primary col align-self-center btn-login">S'inscrire</button>
      <p class="col align-self-center">Déjà inscrit ? Vous pouvez vous connecter <a href="/login">ici</a></p>
    </section>
  </form>
</template>

<script>

// import axios from 'axios';

export default {
  name: "Login-Template",
  data() {
    return {
      dataLogin: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: "",
        id: ""
      },
      isVisibleRegex: false,
      isVisibleEmpty: false,
      isVisibleRepeat: false,

    };
  }, methods: {

    mounted() {

      const regexPassword = /^[a-zA-Z0-9_-]{3,16}$/;
      if (this.dataLogin.email && this.dataLogin.password && this.dataLogin.firstname && this.dataLogin.lastname && regexPassword.test(this.dataLogin.password) && this.dataLogin.password == this.dataLogin.repeatPassword) {

        fetch("http://localhost:3000/api/users/auth", {
          method: "POST",
          body:
            JSON.stringify({
              firstname: this.dataLogin.firstname,
              lastname: this.dataLogin.lastname,
              email: this.dataLogin.email,
              password: this.dataLogin.password
            }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data'
          }
        }).then((response) => {
          if (response.status == 400) {
            alert("Votre mot de passe doit contenir au moins 1 minuscule, 1 majuscule et 1 chiffre")

          } else if (response.status == 500) {
            alert('Veuillez insérer une adresse mail valide')

          } else {
            alert("Votre compte a été créé")
            document.location.href = `http://localhost:8080/login`

          }


        })




      } else {
        if (this.dataLogin.firstname && this.dataLogin.lastname && this.dataLogin.email && this.dataLogin.password && regexPassword.test(this.dataLogin.password) === false) {
          this.isVisibleRegex = true

        } else if (this.dataLogin.firstname && this.dataLogin.lastname && this.dataLogin.email && this.dataLogin.password && regexPassword.test(this.dataLogin.password) && this.dataLogin.password != this.dataLogin.repeatPassword) {
          this.isVisibleRepeat = true

        } else (
          this.isVisibleEmpty = true
        )

      }
    },
    onFileChange(e) {
      console.log(e);
      this.dataLogin.avatar = e.target.files[0] || e.dataTransfer.files;
      console.log(this.dataLogin.avatar);

    },

  }
}



</script>

<style>
.btn {

  margin-top: 20px;
  margin-bottom: 10px;
}
</style>


<!-- 
<div class="form-group">
    <input type="file" accept="image/*" #imageInput (change)="onFileAdded($event)">
    <button mat-raised-button color="primary" (click)="imageInput.click()">ADD IMAGE</button>
    <img [src]="imagePreview" *ngIf="imagePreview" style="max-height: 100px;display:block;margin-top:10px">
  </div> -->