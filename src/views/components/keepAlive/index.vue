<template>
  <div>
    <h1>基本</h1>
    <keep-alive>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user" class="item-width-large">
          <Input type="text" v-model="formInline.user" placeholder="Username" />
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </FormItem>
        <FormItem prop="password" class="item-width-large">
          <Input type="text" v-model="formInline.password" placeholder="Password" />
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </FormItem>
        <FormItem>
          <Button type="primary">Signin</Button>
        </FormItem>
      </Form>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "keep-alivess",
  data() {
    return {
      components: true,
      view: false,
      formInline: {
        user: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  // components: { children1, children2 },
};
</script>