<template>
  <div class="wrapper">
    <div class="row-wrapper" v-for="(table, index) in data" :key="index">
      <rowList :table="table" :visibleRows="15" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

import rowList from "@/components/table/rowList"
export default {
  name: "Home",
  components: {
    rowList
  },
  computed: {
    ...mapState({
      data: state => state.database.database,
      tables: state => state.database.tables
    })
  },
  data() {
    return {}
  },
  mounted() {
    this.tables.forEach(el => {
      const params = {
        name: el.name,
        page: 1
      }
      this.$store.dispatch("database/fetchDatabase", params)
    })
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}
.row {
  &-wrapper {
    padding-bottom: 50px;
  }
}
</style>
