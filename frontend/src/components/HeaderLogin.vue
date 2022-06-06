 <template>

  <header>
    <div id="app" class="main-header d-flex flex-row justify-content-around align-items-center">
      <img src="../assets/icon.png" class="main-logo" alt="main-logo" />

      <h1 class="text-center">Groupomania</h1>
      <nav class="nav flex-column">
        <router-link class="nav-link active" to="/login">Login</router-link>
        <router-link class="nav-link" to="/">Signup</router-link>
      </nav>
    </div>

  </header>

</template>