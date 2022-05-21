<template>
  <HeaderMainPage />

  <ModifyPostTemplate />
</template>

<script>

import HeaderMainPage from '@/components/HeaderMainPage.vue';

import ModifyPostTemplate from '@/components/ModifyPostTemplate.vue';

export default {
  name: 'create-post',
  components: {
    ModifyPostTemplate,
    HeaderMainPage

  }
}


</script>