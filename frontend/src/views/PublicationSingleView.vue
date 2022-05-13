<template>


  <div class="Publications-View" id="Publications-View">
    <div class="container">
      <div class="well ">
        <div class="media">
          <!-- <a class="pull-left" href="#">
            <img class="media-object" src="http://placekitten.com/150/150">
          </a> -->
          <div class="media-body">
            <h4 class="media-heading"></h4>
            <p class="text-right fw-bold fs-3"> {{ PostData.title }}</p>
            <p>{{ PostData.content }}</p>
            <ul class="list-inline list-unstyled main-post">
              <li><span><i class="glyphicon glyphicon-calendar"></i> </span></li>
              <li>|</li>
              <!-- <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span> -->
              <p>{{ PostData.createdAt }} </p>

            </ul>
          </div>
        </div>
      </div>
      <h4> {{ PostComment.length }} commentaires</h4>
      <div v-for="post in PostComment" :key="post" class="Comment-List" id="Comment-List">


        {{ post.commentaire }}
        <br />
        from {{ post.userId }}

        <br />



      </div>



    </div>
  </div>



</template>



<script>

// import PublicationSingle from '../components/PublicationSingleTemplate'

export default {
  // components: {
  //   PublicationSingle
  // },
  data() {
    return {
      PostData: {
        title: "",
        content: "",
        createdAt: ""
      },
      PostComment: {
        commentaire: "test",
        userId: ""
      }

    };
  },
  created() {


    fetch("http://localhost:3000/api/publications/44")
      .then((response) => response.json())
      .then(data => {
        this.PostData = data
        console.table(data);
      }).then()
    fetch("http://localhost:3000/api/comments")
      .then(response => response.json())
      .then(res => {

        console.table(res)
        let CommentContent = res.filter(comment => comment.publicationId == 43)
        if (CommentContent) {
          console.table(CommentContent)
          this.PostComment = CommentContent
        }

      })
  }
}

</script>