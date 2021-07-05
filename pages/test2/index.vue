<template>
  <section class="container">
    <div>{{$store.state.test2.value}}</div>
     <div @click="$store.commit('test2/changeValue')">改变value的值</div>
  </section>
</template>
<script>
export default {
  name: 'test-vuex',
  methods: {

  }
}
</script>
