<template>

  <div class="container-fluid well span6">
    <div class="row-fluid">
      <div class="span2">
        <img :src="avatar" class="img-circle">
      </div>

      <div class="span8">
        <h3 title="username">{{ username }}</h3>
        <h6>Membre depuis le {{ new
            Date(createdAt).toLocaleString("fr-FR", {
              timeZone: "UTC"
            })
        }}</h6>
        <p>
          {{ publications.length }} publications
        </p>
        <p>
          {{ comments.length }} commentaires
        </p>
      </div>


    </div>
  </div>


</template>


<script>

export default {
  name: "SingleUser",
  props: ['username', 'id', 'createdAt', 'comments', 'publications', 'avatar'],


}

</script>


<style scoped>
</style>