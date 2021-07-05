
export const state = () => ({
  number: 1000
})
 
export const mutations = {
  minus (state) {
    state.number --
  },
  add (state) {
    state.number ++
  }
}