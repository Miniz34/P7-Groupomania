<template>


  <form id="Auth-View" enctype="multipart/form-data" method="post">

    <div class="container col align-self-center">
      <div class="row" id="row_style">
        <h4 class="text-center">Modifier post</h4>
        <div class="col-md-4   col-md-offset-4">
          <div class="form-group">
            <input v-model="publication.title" type="text" class="form-control" placeholder="Title">
          </div>
          <textarea v-model="publication.content" id="editor" cols="30"
            rows="10">Submit your text post here...</textarea>
          <br>
          <div class="form-group">
            <button @click.prevent="modifyPost" class="btn btn-primary" id="submit">Modifier post</button>
          </div>
        </div>
      </div>

      <div class="custom-file">
        <input type="file" name="inputFile" class="btn btn-primary" id="inputFile" aria-describedby="inputFileAddon"
          @change="onFileChange" ref="fileInput" />
        <label class="custom-file-label" for="inputFile"></label>
      </div>
      <div v-if="publication.image" class="thumbnail">
        <p>Aperçu de l'image</p>
        <img :src="publication.image" />
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
      publication: {}
    }
  },
  created() {
    const postId = this.$route.params.id;
    console.log(postId);
    fetch(`http://localhost:3000/api/publications/` + postId, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + sessionStorage.getItem("Token")
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.publication = data
        this.firstname = this.publication.user.firstname
        this.lastname = this.publication.user.lastname

        // console.log(this.publications)



      })
  },

  methods: {

    modifyPost() {
      let postId = this.$route.params.id

      let input = document.getElementById('inputFile')
      const fd = new FormData();
      fd.append("title", this.publication.title);
      fd.append("content", this.publication.content);
      fd.append("inputFile", input.files[0]);
      fd.append("userId", userId);

      console.log("test récup", fd.get("title"));
      console.log("test récup", fd.get("content"));
      console.log("test récup", fd.get("inputFile"));
      console.log("test récup", fd.get("userId"));
      if (this.publication.title && this.publication.content) {


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



          .then(() => {
            alert('Post modifié')
            document.location.href = `http://localhost:8080/publications`
          }).catch((err) => console.log(err))
      }
    },
    onFileChange() {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.publication.image = e.target.result
        }
        reader.readAsDataURL(files[0])
      }
    }
  }
}

</script>



<style scoped>
img {

  margin-bottom: 25px;
  width: 100px;
  height: 100px;
}
</style>