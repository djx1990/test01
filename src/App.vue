<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu :name="index" v-for="(menu, index) in menus">
          <template slot="title">
            <Icon :type="menu.icon"></Icon>
            {{menu.name}}
          </template>
          <MenuItem
            :to="menuitem.to"
            :name="index + '-' + itemindex"
            v-for="(menuitem, itemindex) in menu.chilren"
          >
            <Icon :type="menuitem.icon"></Icon>
            {{menuitem.name}}
          </MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '10px 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}" separator="-">
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/List">Components</BreadcrumbItem>
          <BreadcrumbItem to="/table1">Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="height: 600px">
            <router-view></router-view>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
import {
  Layout,
  Header,
  Icon,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  Submenu,
  Menu,
  MenuItem,
  Sider,
  Content,
  Button
} from "iview";

export default {
  //name: "app",
  components: {
    Layout,
    Submenu,
    Icon,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Header,
    Menu,
    MenuItem,
    Sider,
    Content,
    Button
  },
  data() {
    return {
      menus: [
        {
          name: "aaa",
          icon: "ios-navigate",
          chilren: [
            { name: "aaa1", icon: "ios-american-football", to: "/list1" }
          ]
        },
        {
          name: "bbb",
          icon: "ios-navigate",
          chilren: [{ name: "bbbb1", icon: "ios-navigate", to: "/table" }]
        },
        {
          name: "ccc",
          icon: "ios-navigate",
          chilren: [{ name: "ccc1", icon: "ios-navigate", to: "/list" }]
        },
        {
          name: "ddd",
          icon: "ios-navigate",
          chilren: [{ name: "ddd1", icon: "ios-navigate", to: "/table1" }]
        }
      ],
      show: false
    };
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>