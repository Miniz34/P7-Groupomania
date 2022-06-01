<template>


  <form id="Auth-View" enctype="multipart/form-data" method="post">

    <div class="container col align-self-center">
      <div class="row" id="row_style">
        <h4 class="text-center">Submit new post</h4>
        <div class="col-md-4   col-md-offset-4">
          <div class="form-group">
            <input v-model="dataPost.title" type="text" class="form-control" placeholder="Title">
          </div>
          <textarea v-model="dataPost.content" id="editor" cols="30" rows="10">Submit your text post here...</textarea>
          <br>
          <div class="form-group">
            <button @click.prevent="mounted" class="btn btn-primary" id="submit">Submit new post</button>
          </div>
        </div>
      </div>

      <div class="custom-file">
        <input type="file" name="inputFile" class="custom-file-input" id="inputFile" aria-describedby="inputFileAddon"
          @change="onFileChange" />
        <label class="custom-file-label" for="inputFile"></label>
      </div>
    </div>
  </form>



</template>


<script>

// import axios from 'axios';
// import { json } from 'body-parser';
const userId = sessionStorage.getItem("userId")

export default {
  name: "newPost",
  data() {
    return {
      dataPost: {
        title: "",
        content: "",
        comment: ""

      }
    }
  },
  methods: {

    mounted() {
      let postId = this.$route.params.id

      let input = document.getElementById('inputFile')
      const fd = new FormData();
      fd.append("title", this.dataPost.title);
      fd.append("content", this.dataPost.content);
      fd.append("inputFile", input.files[0]);
      fd.append("userId", userId);

      console.log("test récup", fd.get("title"));
      console.log("test récup", fd.get("content"));
      console.log("test récup", fd.get("inputFile"));
      console.log("test récup", fd.get("userId"));
      if (this.dataPost.title && this.dataPost.content) {


        const options = {
          method: "PUT",
          body: fd,
          headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            'Authorization': "Bearer " + sessionStorage.getItem("Token")
          }

        }
        fetch("http://localhost:3000/api/publications/" + postId, options)



          .then(response => {
            console.log(response)
            document.location.href = `http://localhost:8080/publications`
          }).catch((err) => console.log(err))
      }
    },
    onFileChange(e) {
      console.log(e);
      this.dataPost.image = e.target.files[0] || e.dataTransfer.files;
      console.log(this.dataPost.image);

    },
  }
}

</script>

