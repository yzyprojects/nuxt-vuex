<template>
  <section class="container">
    <table>
       <tbody>
        <tr>
            <td>{{ $store.state.minus.number }}</td>
        </tr>
        <tr class="mutation-fun">
          <td @click="$store.commit('minus/minus')">-</td>
          <td @click="$store.commit('minus/add')">+</td>
        </tr>
        </tbody>
    </table>
  </section>
</template>
<script>
export default {
  name: 'test-vuex',
  data() {
    return {
      value: 'aaa'
    }
  },
  methods: {

  }
}
</script>
