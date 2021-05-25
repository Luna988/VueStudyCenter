<template>
  <div>
    <h2>子组件children1</h2>
    <div v-for="(item,i) in parent" :key="i">{{item}}</div>
    {{objParent.name}}
    {{foo}}
    <button @click="handleClick">点击改变 type： {{type}}</button>
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
    type: {
      validator: function(val){
        // 这个值必须匹配下列字符串中的一个
        return ['success','warning','danger'].includes(val)
      }
    },
    onChange: {
      type: Function,
      deafult: () => {}
    }
  },
  inject: ['objParent','foo'],
  data() {
    return {};
  },
  methods: {
    handleClick(){
      // 不建议这么做
      // this.type = 'warning'

      this.onChange(this.type === 'success' ? 'warning' : 'danger')
    }
  }
  // beforeCreate(){
  //   console.log('子组件children1 beforeCreate')
  // },
  // created(){
  //   console.log(this.foo,'inject--foo')
  //   console.log('子组件children1 created')
  // },
  // beforeMount(){
  //   console.log('子组件children1 beforeMount')
  // },
  // mounted(){
  //   console.log('子组件children1 mounted')
  // },
  // beforeUpdate(){
  //   console.log('子组件children1 beforeUpdate')
  // },
  // updated(){
  //   console.log('子组件children1 updated')
  // },
  // beforeDestroy(){
  //   console.log('子组件children1 beforeDestroy')
  // },
  // destroyed(){
  //   console.log('子组件children1 destroyed')
  // }
};
</script>