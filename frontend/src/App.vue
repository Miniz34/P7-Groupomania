<template>

  <router-view />

  <FooterTemplate />

</template>


<script>

import FooterTemplate from './components/FooterTemplate.vue'

export default {
  name: "app",
  components: { FooterTemplate }
}


</script>