<template>
  <div class="wrapper">
    <uiDatabase />
  </div>
</template>

<script>
import uiDatabase from "@/components/uiDatabase/uiDatabase"
export default {
  name: "Home",
  components: {
    uiDatabase
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
