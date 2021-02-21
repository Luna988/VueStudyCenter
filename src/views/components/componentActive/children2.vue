<template>
  <div>
    <h2>{{msg2}}</h2>
    <h3>{{parent}}</h3>
  </div>
</template>
<script>
export default {
  name: "children2",
  data() {
    return {
      msg2: "子组件2",
    };
  },
  props: {
    parent: {
      type: Array,
      required: true,
    },
  },
  beforeCreate(){
    console.log('子组件children2 beforeCreate')
  },
  created(){
    console.log('子组件children2 created')
  },
  beforeMount(){
    console.log('子组件children2 beforeMount')
  },
  mounted(){
    console.log('子组件children2 mounted')
  },
  beforeUpdate(){
    console.log('子组件children2 beforeUpdate')
  },
  updated(){
    console.log('子组件children2 updated')
  },
  beforeDestroy(){
    console.log('子组件children2 beforeDestroy')
  },
  destroyed(){
    console.log('子组件children2 destroyed')
  }
};
</script>