<template>
  <div>
    <h2>响应式原理</h2>
    <input type="text" v-model="val">
    <h1>{{val}}</h1>
  </div>
</template>

<script>
export default {
  name: 'responsive',
  data(){
    return {
      val: 'zhangyun'
    }
  }
}
</script>
