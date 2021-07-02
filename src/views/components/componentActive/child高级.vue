<template>
  <div>
    <h1>$attrs 和 $listeners</h1>
    <label>{{label}}
      <input v-bind="$attrs" />
    </label>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['label'],
  mounted () {
    console.log(this.$attrs, '$attrs')
  }
}
</script>
