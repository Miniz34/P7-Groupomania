<template>

  <HeaderMainPage></HeaderMainPage>
  <CommentTemplate></CommentTemplate>


</template>


<script>

import HeaderMainPage from '@/components/HeaderMainPage.vue'
import CommentTemplate from '@/components/CommentTemplate.vue'

export default {
  name: "Comment",
  components: {
    CommentTemplate, HeaderMainPage
  },
  data() {
    return {

    }
  },
  // methods: {




  //   deleteComment() {
  //     const commentId = this.$route.params.id;
  //     fetch('http://localhost:3000/api/comments/' + commentId), {
  //       method: "DELETE",
  //       headers: {
  //         // 'Accept': 'application/json',
  //         // 'Content-Type': 'application/json',
  //         'Authorization': "Bearer " + sessionStorage.getItem("Token")
  //       },
  //     }
  //   }
  // }
}
</script>


<style>
</style>