<template>
  <div>
    <h1>{{msg}}</h1>
    <!-- <button @click="change">改变自组件</button> -->
    <children1 :parent="parents" :type='type' :on-change="handlePropChange"></children1>
    <children2 :parent="parents"></children2>
    <button @click="handleChange">按钮</button>
    <div v-is="show">
      4324
      <!-- <AsyncList /> -->
    </div>
  </div>
</template>
<script>
// import LoadingCom from './Loading'
// import ErrorCom from './Error'
// const AsyncList = () => ({
//   component: import('./List'),
//   loading: LoadingCom,
//   error: ErrorCom,
//   delay: 200,
//   timeout: 3000
// })
export default {
  name: "",
  provide(){
    return {
      
      foo: 'bar',
      objParent: {
        name: 'parent',
        age: 18,
        class: '605'
      }
    }
  },
  data() {
    return {
      show: false,
      msg: "组件通信",
      type: 'success',
      parents: ["fds", "fsdf"],
    };
  },
  components: {
    // AsyncList,
    children1: () => import(/* webpackChunkName: 'children1' */ "./children1"),
    children2: () => import(/* webpackChunkName: 'children2' */ "./children2"),
  },
  methods: {
    handleChange(){
      this.show = !this.show
    },
    handlePropChange(){
      
    }
  }
  // beforeCreate(){
  //   console.log('父级 beforeCreate')
  // },
  // created(){
  //   console.log('父级 created')
  // },
  // beforeMount(){
  //   console.log('父级 beforeMount')
  // },
  // mounted(){
  //   console.log('父级 mounted')
  // },
  // beforeUpdate(){
  //   console.log('父级 beforeUpdate')
  // },
  // updated(){
  //   console.log('父级 updated')
  // },
  // beforeDestroy(){
  //   console.log('父级 beforeDestroy')
  // },
  // destroyed(){
  //   console.log('父级 destroyed')
  // }
};
</script>