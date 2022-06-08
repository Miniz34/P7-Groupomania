 <template>


  <header class="header-main">
    <div id="app" class="main-header d-flex flex-row justify-content-around align-items-center">
      <img src="../assets/icon-left-font-monochrome-black.png" class="main-logo" alt="main-logo" />


      <nav class="nav flex-column">
        <router-link class="nav-link active" to="/login">Login</router-link>
        <router-link class="nav-link" to="/">Signup</router-link>
      </nav>
    </div>

  </header>

</template>

<script>

export default {

  name: "auth",
  data() {
    return {

    }
  },
}



</script>

<style>
.header-main {
  align-items: center;
  justify-content: center;
  width: 100%;
}

.main-header {
  height: 200px;
}
</style>