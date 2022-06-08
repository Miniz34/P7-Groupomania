<template>


  <form id="Auth-View" enctype="multipart/form-data" method="post" class="input-post">

    <div class="main-post">
      <div class="form-post" id="row_style">
        <h4 class="title-post">Créer un nouveau post</h4>
        <div>
          <div class="form-group">
            <label class="hidden" for="title"> title </label>
            <input v-model="dataPost.title" type="text" class="form-control post-responsive" placeholder="Title"
              id="title" aria-describedby="title">

          </div>
          <label class="hidden content-label" for="editor"> content </label>
          <textarea v-model="dataPost.content" id="editor" cols="100" rows="10" placeholder="Content"
            class="post-responsive" aria-describedby="editor">Submit your text post here...</textarea>

          <br>
          <div class="form-group">
            <button @click.prevent="sendPost" class="btn btn-primary" id="submit">Submit new post</button>
          </div>
        </div>
        <div class="custom-file">
          <label for="inputFile" class="hidden">File</label>
          <input type="file" name="inputFile" class="btn btn-primary" id="inputFile" @change="onFileChange"
            ref="fileInput" aria-describedby="inputFile" />

        </div>
        <div v-if="this.dataPost.image" class="thumbnail">
          <p>Aperçu de l'image</p>
          <img :src="this.dataPost.image" alt="Miniature image" />
        </div>
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
    sendPost() {
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
      console.log(input.files[0])
      if (this.dataPost.title && this.dataPost.content) {


        // axios
        // .post("http://localhost:3000/api/publications", fd, {
        // })
        const options = {
          method: "POST",
          body: fd,
          headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            'Authorization': "Bearer " + sessionStorage.getItem("Token")
          }

        }
        fetch("http://localhost:3000/api/publications", options)



          .then(response => {
            console.log(response)
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
          this.dataPost.image = e.target.result
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

.main-post {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

