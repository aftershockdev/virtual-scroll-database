<template>
  <div class="info-base">
    <div class="header">
      <button>
        <img src="@/assets/img/close.png" alt="" />
      </button>
    </div>
    <div class="info-rows">
      <span class="info-title">ID</span>
      <span class="info-title">{{ table.name }}</span>
      <span class="info-title">Status</span>
    </div>
    <div
      :style="{ height: rowHeight * visibleRows + 1 + 'px' }"
      class="main-database"
      @scroll="onScroll($event)"
    >
      <div :style="{ height: getTopHeight + 'px' }"></div>

      <row v-for="data in getVirtualData" :key="data.id" :data="data" />

      <div :style="{ height: getBottomHeight + 'px' }"></div>

      <Observer @intersect="intersected" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import row from "@/components/table/row"
import Observer from "@/components/Observer"
export default {
  components: {
    row,
    Observer
  },
  props: {
    table: {
      type: Object,
      required: true,
      default: () => Object
    },
    visibleRows: {
      type: Number,
      required: true,
      default: () => Number
    }
  },
  data() {
    return {
      page: 2,
      start: 0,
      rowHeight: 31
      // visibleRows: 15
    }
  },
  computed: {
    ...mapState({
      checkedbase: state => state.database.checkedbase
    }),
    getTopHeight() {
      return this.rowHeight * this.start
    },
    getBottomHeight() {
      return (
        this.rowHeight *
        (this.table.data.length - (this.start + this.visibleRows + 1))
      )
    },
    getVirtualData() {
      return this.table.data.slice(
        this.start,
        this.start + this.visibleRows + 1
      )
    }
  },
  beforeDestroy() {
    this.$store.commit("database/destroyDatabase")
  },
  methods: {
    intersected() {
      const params = {
        name: this.table.name,
        page: this.page++
      }
      this.$store.dispatch("database/fetchDatabase", params)
    },
    onScroll(e) {
      this.start = Math.min(
        this.table.data.length - this.visibleRows - 1,
        Math.floor(e.target.scrollTop / this.rowHeight)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.main-database {
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
}
.info {
  &-base {
    width: 900px;
    height: auto;
    border: 1px solid grey;
    border-radius: 4px;
    box-shadow: -15px -15px 30px rgba(255, 255, 255, 0.6),
      15px 15px 30px rgba(212, 212, 233, 0.5);
  }
  &-rows {
    display: grid;
    grid-template-columns: 35px 660px 204px;
    background: rgba(0, 0, 0, 0.3);
  }
  &-title {
    display: block;
    border: 0.5px solid grey;
    font-size: 14px;
    padding: 3px 0px;
  }
}
.header {
  height: 30px;
  background: grey;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 3px 5px 3px 0px;
  img {
    transition: all 0.15s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
  .delete {
    position: absolute;
    left: 5px;
    font-size: 14px;
    padding: 3px 10px;
    border: 1px solid white;
    border-radius: 15px;
    color: white;
    background: inherit;
    transition: all 0.15s ease-in-out;
    &:hover {
      background: white;
      color: grey;
    }
  }
}
</style>
