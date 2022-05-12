<template>
  <HeaderMainPage />

  <CreatePostTemplate />
</template>

<script>

import HeaderMainPage from '@/components/HeaderMainPage.vue';

import CreatePostTemplate from '@/components/CreatePostTemplate.vue'

export default {
  name: 'create-post',
  components: {
    CreatePostTemplate,
    HeaderMainPage

  }
}


</script>