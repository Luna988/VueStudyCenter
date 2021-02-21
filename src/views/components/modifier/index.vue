<template>
  <div>
    <h1>.number修饰符</h1>
    <Input type="number" v-model.number="inputModel" placeholder="轻输入。。。" style="width: 200px" />
    <br />
    input:{{inputModel}}
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      inputModel: "",
    };
  },
};
</script>