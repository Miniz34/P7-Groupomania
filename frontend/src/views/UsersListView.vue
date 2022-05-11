<template>
  <listUser />

  <p> {{ data }}</p>
</template>



<script>
import listUser from "../components/UsersListTemplate.vue";



export default {
  name: "test",
  components: {
    listUser,
  },
  data() {
    return {
      users: []
    }
  }

}

</script>