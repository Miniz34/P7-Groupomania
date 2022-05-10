<template>

  <div class="container" id="form_filler">
    <div class="main">
      <div class="main-center">
        <h5>Sign up once and watch any of our free demos.</h5>
        <form class="" method="post" action="#">

          <div class="form-group">
            <label for="name">Your Name</label>
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
              <input type="text" class="form-control" name="name" id="name" placeholder="Enter your Name" />
            </div>
          </div>

          <div class="form-group">
            <label for="email">Your Email</label>
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
              <input type="text" class="form-control" name="email" placeholder="Enter your Email" />
            </div>
          </div>

          <div class="form-group">
            <label for="username">Username</label>
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
              <input type="text" class="form-control" name="username" placeholder="Enter your Username" />
            </div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              <input type="password" class="form-control" name="password" placeholder="Enter your Password" />
            </div>
          </div>

          <div class="form-group">
            <label for="confirm">Confirm Password</label>
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              <input type="password" class="form-control" name="confirm" placeholder="Confirm your Password" />
            </div>
          </div>

          <button type="submit">SUBMIT</button>

        </form>
      </div>
      <!--main-center"-->
    </div>
    <!--main-->
  </div>
  <!--container-->
</template>

<script>

export default {
  name: "Publications-View",
  data() {
    return {


    };
  },
}


</script>


<style>
#form_filler {
  margin-top: 150px
}
</style>