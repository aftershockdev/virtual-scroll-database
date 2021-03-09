<template>
  <div class="wrapper">
    <div class="database-links">
      <router-link
        class="database-link"
        v-for="(data, index) in databases"
        :key="index"
        :to="`/databases/${data.slug}`"
      >
        {{ data.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "databases",
  data() {
    return {
      databases: [
        { title: "Todos database", slug: "/todos", desc: "todos" },
        { title: "Comments database", slug: "/comments", desc: "comments" },
        { title: "Posts database", slug: "/posts", desc: "posts" }
      ]
    }
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
.database {
  &-links {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  &-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid grey;
    transition: all 0.15s ease-in-out;
    &:hover {
      background: grey;
      color: white;
    }
  }
}
</style>
