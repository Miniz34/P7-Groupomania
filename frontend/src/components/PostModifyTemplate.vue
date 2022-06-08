<template>


  <form id="Auth-View" enctype="multipart/form-data" method="post">

    <div class="main-post">
      <div class="form-post" id="row_style">
        <h4 class="title-post">Modifier post</h4>
        <div>
          <div class="form-group post-responsive">
            <label class="hidden" for="title"> title </label>
            <input v-model="publication.title" type="text" class="form-control post-responsive" placeholder="Title"
              id="title" aria-describedby="title">
          </div>
          <label class="hidden content-label " for="editor"> content </label>
          <textarea v-model="publication.content" id="editor" cols="100" rows="10" class="post-responsive"
            aria-describedby="editor">Submit your text post here...</textarea>
          <br>
          <div class="form-group">
            <button @click.prevent="modifyPost" class="btn btn-primary" id="submit">Modifier post</button>
          </div>
        </div>
        <div class="custom-file">
          <label class="custom-file-label hidden" for="inputFile">File</label>
          <input type="file" name="inputFile" class="btn btn-primary" id="inputFile" aria-describedby="inputFile"
            @change="onFileChange" ref="fileInput" />

        </div>
        <div v-if="publication.image" class="thumbnail">
          <p>Aperçu de l'image</p>
          <img :src="publication.image" alt="Miniature avatar" />
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

.main-post {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>