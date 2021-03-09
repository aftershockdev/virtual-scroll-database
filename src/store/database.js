const state = () => ({
  database: [],
  checkedbase: [],
  currentBase: "",
  baseUrl: "https://jsonplaceholder.typicode.com"
})
const mutations = {
  initDatabase(state, data) {
    if (!state.database) {
      state.database = data
    } else {
      state.database = [...state.database, ...data]
    }
  },
  destroyDatabase(state) {
    state.database = []
  },
  initCurrentBase(state, slug) {
    state.currentBase = slug
  },
  selectDataElement(state, id) {
    const result = state.database.find(el => {
      return el.id === id
    })
    if (!state.checkedbase.length) {
      state.checkedbase = result
    } else {
      state.checkedbase = [...state.checkedbase, result]
    }
  },
  discardDataElement(state, id) {
    const result = state.checkedbase.find(el => {
      return el.id === id
    })
    if (result) {
      state.checkedbase = state.checkedbase.filter(el => {
        return el.id !== id
      })
    }
  }
}
const actions = {
  async fetchDatabase({ commit, state }, page) {
    if (page <= 20) {
      const res = await fetch(
        `${state.baseUrl}/${state.currentBase}?_page=${page}`
      )
      const data = await res.json()
      commit("initDatabase", data)
    }
    return
  }
}

export default { namespaced: true, state, mutations, actions }
