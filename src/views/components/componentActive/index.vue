<template>
  <div>
    <h1>{{msg}}</h1>
    <children2 :parent="parents"></children2>

    <children1 :parent="parents"></children1>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      msg: "父子组件通信",
      parents: ["fds", "fsdf"],
    };
  },
  components: {
    children1: () => import("./children1"),
    children2: () => import("./children2"),
  },
  beforeCreate(){
    console.log('父级 beforeCreate')
  },
  created(){
    console.log('父级 created')
  },
  beforeMount(){
    console.log('父级 beforeMount')
  },
  mounted(){
    console.log('父级 mounted')
  },
  beforeUpdate(){
    console.log('父级 beforeUpdate')
  },
  updated(){
    console.log('父级 updated')
  },
  beforeDestroy(){
    console.log('父级 beforeDestroy')
  },
  destroyed(){
    console.log('父级 destroyed')
  }
};
</script>