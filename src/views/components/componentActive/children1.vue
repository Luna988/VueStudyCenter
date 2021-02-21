<template>
  <div>
    <h2>子组件children1</h2>
    <div v-for="(item,i) in parent" :key="i">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: "children1",
  props: {
    parent: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  beforeCreate(){
    console.log('子组件children1 beforeCreate')
  },
  created(){
    console.log('子组件children1 created')
  },
  beforeMount(){
    console.log('子组件children1 beforeMount')
  },
  mounted(){
    console.log('子组件children1 mounted')
  },
  beforeUpdate(){
    console.log('子组件children1 beforeUpdate')
  },
  updated(){
    console.log('子组件children1 updated')
  },
  beforeDestroy(){
    console.log('子组件children1 beforeDestroy')
  },
  destroyed(){
    console.log('子组件children1 destroyed')
  }
};
</script>