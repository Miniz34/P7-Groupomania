<!-- PAS ENCORE FAIT, VOIR PUBLICATIONSINGLEVIEW.VUE -->





<template>


  <head>
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" />
  </head>


  <div class="Publications-View" id="Publications-View">
    <div class="container">
      <div class="well ">
        <div class="media">
          <!-- <a class="pull-left" href="#">
            <img class="media-object" src="http://placekitten.com/150/150">
          </a> -->
          <div class="media-body">
            <h4 class="media-heading"></h4>
            <p class="text-right fw-bold fs-3">{{ title }}</p>
            <p>{{ content }}</p>
            <ul class="list-inline list-unstyled main-post">
              <li><span><i class="glyphicon glyphicon-calendar"></i> </span></li>
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

            </ul>
          </div>
        </div>
      </div>
      <div>
      </div>
      <button> button filler commenter</button>

    </div>
  </div>

  <p> hello </p>


</template>

<script>

export default {
  name: "singlePost",
  props: ['title', 'content', 'createdAt', 'comments']

}


</script>