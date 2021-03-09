<template>
  <div class="wrapper">
    <router-link class="home-button" to="/databases">Go back</router-link>
    <uiDatabase />
  </div>
</template>

<script>
import uiDatabase from "@/components/uiDatabase/uiDatabase"
export default {
  components: {
    uiDatabase
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .home-button {
    margin-bottom: 10px;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: grey;
    text-transform: uppercase;
    border: 1px solid grey;
  }
}
</style>
