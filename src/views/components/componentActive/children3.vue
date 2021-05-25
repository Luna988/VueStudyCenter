<template>
  <div>
    <h1>provide-inject</h1>
    <button @click="changeVal">一键切换</button>
    {{objParent.name}}---
    {{foo}}
  </div>
</template>

<script>
export default {
  name: 'children3',
  data () {
    return {}
  },
  inject: ['objParent','foo'],
  mounted(){
    console.log(this.objParent,'objParent')
    console.log(this.foo,'foo')
  },
  methods: {
    changeVal(){
      this.objParent.name = 'lisisi'
      this.foo='jjjjjjj'
    }
  }
}
</script>

<style>

</style>