<template>
  <HeaderMainPage />

  <PostCreateTemplate />
</template>

<script>

import HeaderMainPage from '@/components/HeaderMainPage.vue';

import PostCreateTemplate from '@/components/PostCreateTemplate.vue'

export default {
  name: 'create-post',
  components: {
    PostCreateTemplate,
    HeaderMainPage

  }
}


</script>