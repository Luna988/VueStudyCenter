<template>
  <div>
    <h1>vuex</h1>
    <h1>{{count}}</h1>
    <Button type="primary" @click="addCount">加1</Button>
    <Button @click="reduceCount">减1</Button>
  </div>
</template>
<script>
import store from "@/store/index";
export default {
  name: "vuex",
  data() {
    return {};
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    addCount() {
      store.commit("increment");
    },
    reduceCount() {
      store.commit("reduce");
    },
  },
};
</script>