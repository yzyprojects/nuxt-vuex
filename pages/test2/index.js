
export const state = () => ({
  value: 'aaa'
})
 
export const mutations = {
  changeValue (state) {
    state.value += 'bbb'
  }
}