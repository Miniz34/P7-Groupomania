<template>



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
          <button @click="mounted" class="btn btn-primary" id="submit">Submit new post</button>
        </div>
      </div>
    </div>
  </div>


  <button @click="test">test</button>

</template>


<script>

const id = sessionStorage.getItem("ID")

export default {
  name: "newPost",
  data() {
    return {
      dataPost: {
        title: "",
        content: "",

      }
    }
  },
  methods: {
    mounted() {
      if (this.dataPost.title && this.dataPost.content) {
        fetch("http://localhost:3000/api/publications", {
          method: "POST",
          body: JSON.stringify({
            title: this.dataPost.title,
            content: this.dataPost.content,
            userId: id

          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + sessionStorage.getItem("Token")

          }
        }).then(function (response) {

          if (response.ok) {

            const token = sessionStorage.getItem("ID")

            console.log(token)


          }
        })
      }
    }
  }
}

</script>


