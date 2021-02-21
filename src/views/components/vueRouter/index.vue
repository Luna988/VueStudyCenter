<template>
  <div>
    <h1>vue-router</h1>
    <router-link to="/slots" v-slot="{ href, route, navigate, isActive }">
      <NavLink :active="isActive" :href="href" @click="navigate">{{ route.fullPath }}</NavLink>
    </router-link>
  </div>
</template>
<script>
import NavLink from './Navlink'
export default {
  name: "vueRouter",
  data() {
    return {
      href: "",
      route: {
        fullPath: "",
      },
      // navigate:'',
      isActive: true,
      isExactActive: true,
    };
  },
  components: {NavLink},
  methods: {
    navigate() {},
  },
};
</script>