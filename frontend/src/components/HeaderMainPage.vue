 <template>

  <header>
    <div id="app" class="main-header d-flex flex-row justify-content-around align-items-center">
      <img src="../assets/icon.png" class="main-logo" />

      <h1 class="text-center">Groupomania</h1>
      <nav class="nav flex-column">
        <router-link class="nav-link active" :to="{ name: 'SingleUser', params: { id } }">
          Profile
        </router-link>
        <router-link class="nav-link active" to="/users">Users</router-link>
        <router-link class="nav-link active" to="/publications">Main Page</router-link>
        <router-link @click="clear" class="nav-link active" to="/login">Logout</router-link>
      </nav>
    </div>

  </header>

</template>

<script>

export default {

  name: "logout",
  data() {
    return {
      id: sessionStorage.getItem("userId")

    }
  },

  methods: {
    clear() {
      sessionStorage.clear()
    }
  }
}



</script>