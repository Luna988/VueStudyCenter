<template>
  <div class="layout">
    <Layout>
      <layout-header></layout-header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-1" theme="light" width="auto" :open-names="['1-1']">
            <MenuItem name="1-1">
              <Icon type="ios-navigate"></Icon>
              <router-link :to="{name:'home'}">首页</router-link>
            </MenuItem>
            <Submenu v-for="(menu,index) in menus" :key="index" :name="menu.activeName">
              <template slot="title">
                <Icon :type="menu.iconType"></Icon>
                {{menu.title}}
              </template>
              <MenuItem
                v-for="(menuChildren, i) in menu.children"
                :key="i"
                :name="menuChildren.name"
                :to="{name:menuChildren.pathName}"
              >{{menuChildren.title}}</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import "@/plugins/iview/index.js";
export default {
  name: "home",
  components: {
    layoutHeader: () => import("./headers"),
  },
  data() {
    return {
      menus: [
        {
          title: "组件通信",
          activeName: "2-1",
          icon: "",
          iconType: "ios-keypad",
          children: [
            {
              name: "2-1",
              icon: "",
              iconType: "",
              title: "父子组件",
              pathName: "children2-1",
              url: "",
            },
            {
              name: "2-2",
              icon: "",
              iconType: "",
              title: "children2-2",
              pathName: "children2-2",
              url: "",
            },
          ],
        },
        {
          title: "响应式原理",
          activeName: "3-1",
          icon: "",
          iconType: "ios-keypad",
          children: [
            {
              name: "3-1",
              icon: "",
              iconType: "",
              title: "响应式",
              pathName: "responsive",
              url: "",
            },
          ],
        },
        {
          title: "路由",
          activeName: "4-1",
          icon: "",
          iconType: "ios-keypad",
          children: [
            {
              name: "4-1",
              icon: "",
              iconType: "",
              title: "路由1",
              pathName: "vueRouter",
              url: "",
            },
          ],
        },
        {
          title: "修饰符",
          activeName: "5-1",
          icon: "",
          iconType: "ios-keypad",
          children: [
            {
              name: "5-1",
              icon: "",
              iconType: "",
              title: "修饰符",
              pathName: "modifier",
              url: "",
            },
          ],
        },
        {
          title: "插槽",
          activeName: "6-1",
          icon: "",
          iconType: "ios-keypad",
          children: [
            {
              name: "6-1",
              icon: "",
              iconType: "",
              title: "v-slot",
              pathName: "slots",
              url: "",
            },
          ],
        },
        {
          title: "vuex",
          activeName: "7-1",
          icon: "",
          iconType: "ios-keypad",
          children: [
            {
              name: "7-1",
              icon: "",
              iconType: "",
              title: "vuex",
              pathName: "vuex",
              url: "",
            },
          ],
        },
        {
          title: "keepAlive",
          activeName: "8-1",
          icon: "",
          iconType: "ios-keypad",
          children: [
            {
              name: "8-1",
              icon: "",
              iconType: "",
              title: "keepAlive",
              pathName: "keepAlive",
              url: "",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang='scss' scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>