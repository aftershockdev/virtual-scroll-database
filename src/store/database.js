const state = () => ({
  tables: [{ name: "todos" }, { name: "comments" }, { name: "posts" }],
  database: [],
  baseUrl: "https://jsonplaceholder.typicode.com"
})
const mutations = {
  initDatabase(state, data) {
    if (state.database.length < state.tables.length) {
      state.database.push(data)
    } else {
      state.database.forEach(el => {
        if (el.name === data.name) {
          el.data.push(...data.data)
        }
      })
    }
  }
  // selectDataElement(state, id) {
  //   const result = state.database.find(el => {
  //     return el.id === id
  //   })
  //   if (!state.checkedbase.length) {
  //     state.checkedbase = result
  //   } else {
  //     state.checkedbase = [...state.checkedbase, result]
  //   }
  // },
  // discardDataElement(state, id) {
  //   const result = state.checkedbase.find(el => {
  //     return el.id === id
  //   })
  //   if (result) {
  //     state.checkedbase = state.checkedbase.filter(el => {
  //       return el.id !== id
  //     })
  //   }
  // },
  // destroyDatabase(state) {
  //   state.database = []
  // }
}
const actions = {
  async fetchDatabase({ commit, state }, params) {
    if (params.page <= 20) {
      const res = await fetch(
        `${state.baseUrl}/${params.name}?_page=${params.page}`
      )
      const data = await res.json()
      const result = { name: params.name, data: [...data] }
      commit("initDatabase", result)
    }
    return
  }
}

export default { namespaced: true, state, mutations, actions }
