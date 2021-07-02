<template>
  <div>
    <h1>children2-2</h1>
    <label>{{label}}
      <input v-bind="$attrs" />
    </label>
    <TreeList :list="list" />
  </div>
</template>
<script>
import TreeList from '@/views/components/TreeView/index'

export default {
  name: '',
  props: ['label'],
  components: {TreeList},
  data(){
    return {
      list: [
          { 
            name: "11111hello1",
            children: [{ name: "22222hello5" }, { name: "22222wat6" }]
          },
          { name: "11111wat2" },
          {
            name: "11111child folder3",
            children: [
              {
                name: "222222child folder4",
                children: [{ name: "33333hello5" }, { name: "33333wat6" }]
              },
              { name: "222222hello7" },
              { name: "222222wat8" },
              {
                name: "222222child folder",
                children: [{ name: "33333hello" }, { name: "333333wat" }]
              }
            ]
          }
        ]
    }
  }
}
</script>
