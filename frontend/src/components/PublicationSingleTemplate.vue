<template>

  <div class="content">
    <p>bonjour</p>
    <p> {{ content }}</p>
  </div>

</template>

<script>

export default {
  name: "singlePost",
  props: ['title', 'content', 'createdAt', 'comments']

}


</script>