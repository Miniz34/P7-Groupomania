<template>

  <head>
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" />
  </head>
  <div class="Publications-View" id="Publications-View">
    <div class="container">
      <div class="well ">
        <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object" src="http://placekitten.com/150/150">
          </a>
          <div class="media-body">
            <h4 class="media-heading"></h4>
            <p class="text-right">by userid : {{ userId }}</p>
            <p title="hello">{{ content }}</p>
            <ul class="list-inline list-unstyled main-post">
              <li><span><i class="glyphicon glyphicon-calendar"></i>{{ createdAt }} </span></li>
              <li>|</li>
              <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
              <li>|</li>
              <li>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
              </li>
              <li>|</li>
              <li>
                <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->
                <span><i class="fa fa-facebook-square"></i></span>
                <span><i class="fa fa-twitter-square"></i></span>
                <span><i class="fa fa-google-plus-square"></i></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
      </div>

    </div>
  </div>

</template>

<script>

export default {
  name: "newPost",
  props: ['content', 'userId', 'createdAt']
}

</script>

<style>
.well {
  margin-top: 50px;
  background-color: white;
}

.main-post {
  display: flex;
}

.post {
  width: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  padding: 20px;
  background: #FFEEE4;
  margin: 10px;
}

#Publications-View {
  margin-bottom: 100px;

}
</style>
