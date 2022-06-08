 <template>

  <header class="header-main">
    <div id="app" class="main-header d-flex flex-row justify-content-around align-items-center">
      <img src="../assets/icon-left-font-monochrome-black.png" class="main-logo" alt="main-logo" />
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

<style scoped>
.header-main {
  align-items: center;
  justify-content: center;
  width: 100%;
}

.main-header {
  height: 200px;
}
</style>