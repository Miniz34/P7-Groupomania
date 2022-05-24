<template>

  <div class="container-fluid well span6">
    <div class="row-fluid">
      <div class="span2">
        <img :src="avatar" class="img-circle">
      </div>

      <div class="span8">
        <h3 title="username">{{ username }}</h3>
        <h6>Membre depuis le {{ new
            Date(createdAt).toLocaleString("fr-FR", {
              timeZone: "UTC"
            })
        }}</h6>
        <p>
          {{ publications.length }} publications
        </p>
        <p>
          {{ comments.length }} commentaires
        </p>
      </div>


    </div>
  </div>
  <div>


    <router-link :to="{ name: 'ModifyUser', params: { id } }">
      <p v-if="this.id == userid || admin == `true`" class="text-right fw-bold fs-3"><button>Modifier profile</button>
      </p>
    </router-link>

    <button v-if="this.id == userid || admin == `true`" class="text-right fw-bold fs-3"
      @click.prevent="deleteUser">Supprimer profile</button>
  </div>


</template>


<script>

export default {
  name: "SingleUser",
  data() {
    return {
      userid: sessionStorage.getItem("userId"),
      admin: sessionStorage.getItem("isAdmin")
    }
  },
  props: ['username', 'id', 'createdAt', 'comments', 'publications', 'avatar'],
  methods: {
    deleteUser() {
      const userId = this.$route.params.id;
      fetch('http://localhost:3000/api/users/' + userId, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + sessionStorage.getItem("Token")
        },

      })
        .then(() =>
          document.location.href = `http://localhost:8080/publications`)
    }

  }


}

</script>


<style scoped>
</style>