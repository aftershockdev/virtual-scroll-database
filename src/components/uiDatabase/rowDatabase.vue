<template>
  <div class="info-row" @click="setPickedData" :class="{ active: checked }">
    <span class="info-title id">{{ data.id }}</span>
    <span class="info-title desc">{{ data.title }}</span>
    <span class="info-title status" :class="{ done: data.completed }">
      {{ getDataStatus }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => Object
    }
  },
  data() {
    return {
      checked: false
    }
  },
  computed: {
    getDataStatus() {
      if (this.data.completed) {
        return "Done"
      }
      return "Unfinished"
    }
  },
  methods: {
    setPickedData() {
      this.$store.commit("database/selectDataElement", this.data.id)
      this.checked = !this.checked
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  &-row {
    display: grid;
    grid-template-columns: 35px 660px 200px;
    cursor: pointer;
    &.active {
      background: rgba(0, 0, 0, 0.2);
    }
  }
  &-title {
    display: block;
    border: 0.1px solid grey;
    font-size: 14px;
    padding: 10px 0px 5px 5px;
    text-align: left;
    &.status {
      color: red;
    }
    &.done {
      color: green;
    }
  }
}
</style>
