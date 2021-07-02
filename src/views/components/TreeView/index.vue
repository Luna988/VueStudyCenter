<template>
  <div>
    <h3>递归组件treelist</h3>
    <div v-for="(child, i) in list" :key="i">
      {{child.name}}
      <div v-if="child.children && child.children.length > 0">
        <TreeList :list='child.children' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeList',
  props: {
    list: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style>

</style>