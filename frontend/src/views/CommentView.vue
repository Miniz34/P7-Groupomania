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

}
</script>


<style>
</style>