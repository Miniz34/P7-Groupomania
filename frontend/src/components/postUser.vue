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

      } else {
        alert("Veuillez remplir le formulaire d'inscription")
      }
    }
  }
}
</script>