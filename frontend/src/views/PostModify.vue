<template>
  <HeaderMainPage />

  <PostModifyTemplate />
</template>

<script>

import HeaderMainPage from '@/components/HeaderMainPage.vue';

import PostModifyTemplate from '@/components/PostModifyTemplate.vue';

export default {
  name: 'create-post',
  components: {
    PostModifyTemplate,
    HeaderMainPage

  },
  data() {
    return {
      publication: {}

    }
  },

}


</script>
