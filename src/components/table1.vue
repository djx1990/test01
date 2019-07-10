<template>
  <Row type="flex" :gutter="24">
    <Col :span="24">
      <Input search style="width: 200px" v-model="query" @on-search="search"></Input>
      <Input v-model="user.name" style="width:200px"></Input>
      <Input v-model="user.age" style="width:200px"></Input>
      <!-- <router-link to="/users/new">fdsafdsa</router-link> 二级路由跳转方法一 -->
      <Button type="primary" to="/users/new">新建</Button>
      <!-- <Button type="primary" to="/users/edit">safdasfd</Button> 二级路由跳转方法二  -->
      <Select v-model="ds" @on-change="selectChange" style="width: 200px">
        <Option v-for="item in items" :value="item">{{ item }}</Option>
      </Select>
    </Col>
    <Col :span="24">
      <Table border stripe ref="selection" height="400" :columns="columns" :data="users"></Table>
    </Col>
    <Col :span="12" push="12">
      <Page :total="100" show-elevator show-size @on-change="pp"/>
    </Col>
    <Col :span="12" pull="12">
      <Button @click="handleSelectAll(true)" ghost>
        <Icon type="ios-add"/>
      </Button>
      <Button type="Success" shape="circle" @click="handleSelectAll(false)">全不选</Button>
      <!-- <Input type="text" v-model='user.name' /> -->
    </Col>
    <Col :span="12">
      <Dropdown>
        <a href="javascript:void(0)">
          下拉菜单
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>
            <Button to="/list">list</Button>
          </DropdownItem>
          <!-- <Button to="/hi" ghost>
            <DropdownItem>hi</DropdownItem>
          </Button>-->
          <DropdownItem disabled>list1</DropdownItem>

          <Dropdown placement="right-start">
            <DropdownItem>asda</DropdownItem>
            <DropdownMenu solt="list">
              <DropdownItem>asda</DropdownItem>
              <DropdownItem>asda</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownMenu>
      </Dropdown>
    </Col>
  </Row>
</template>
<script>
import {
  Table,
  Row,
  Col,
  Button,
  Input,
  Page,
  Select,
  Option,
  Icon,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "iview";
// 在上方出现过的标签（首字母大写）均要出现在import和下方components里面
export default {
  components: {
    Row,
    Col,
    Table,
    Button,
    Input,
    Page,
    Select,
    Option,
    Icon,
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  name: "",
  props: "",
  data() {
    return {
      query: "",
      value: "",
      columns: [
        {
          type: "selection",
          width: 60
        },
        {
          title: "姓名",
          key: "name",
          sortable: true
        },
        {
          title: "年龄",
          key: "age",
          sortable: true,
          filters: [
            {
              label: "Greate than 40",
              value: 1
            },
            {
              label: "Less than 40",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.age > 40;
            } else if (value === 2) {
              return row.age < 40;
            }
          }
        },
        {
          title: "爱好",
          key: "favs"
        },
        {
          title: "序列",
          key: "id"
        },
        {
          title: "链接",
          key: "url",
          render: (h, params) => {
            return h("img", { attrs: { src: params.row.url } }, "");
          }
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "xxx"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary"
                  },
                  on: {
                    click: () => {
                      this.edit(params.row.id);
                      // （params.row.id）给一个id可以让下方的user_id传数据，
                    }
                  }
                },
                "edit"
              ),
              h(
                "Button",
                {
                  on: {
                    click: () => {
                      this.top(params.index);
                    }
                  }
                },
                "top"
              )
            ]);
          }
        }
      ],
      users: [],
      user: [
        {
          name: "",
          age: ""
        }
      ],
      items: [1, 2, 3, 4, 23, 32, 44],
      ds: ""
    };
  },
  created() {
    this.$http.get("/users").then(res => {
      this.users = res.data.users;
    });
  },
  methods: {
    selectChange() {
      console.log(this.ds);
      let user = this.users.find(user => {
        return (user.age = this.ds);
      });
      this.users = [user];
    },
    pp(page) {
      this.$http.get(`/users?page=${page}`).then(res => {
        this.users = res.data.users;
      });
    },
    search() {
      if (this.query == "") {
        this.$http.get(`/users?query=${this.query}`).then(res => {
          this.users = res.data.users;
        });
      } else {
        this.users = this.users.filter(val => {
          return val.name.includes(this.query);
        });
      }

      // this.$http.get(`/users?query=${this.query}`).then(res => {
      //   this.users = res.data.users;
      // });
    },
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    remove(index) {
      let user = this.users[index];
      this.$http.delete("/users/" + user.id).then(res => {
        if (res.data.status === 1) {
          this.users.splice(index, 1);
          alert("success");
        } else {
          alert("fail");
        }
      });
    },
    top(index) {
      let currenTop = this.users[index];
      this.$http.post("/users/" + this.user.id + "/top").then(res => {
        // console.log(res);
        if (res.data.status === 1) {
          this.users.splice(index, 1);
          this.users.unshift(currenTop);
          alert("success");
        } else {
          alert("fail");
        }
      });
    },
    edit(user_id) {
      this.$router.push(`/users/${user_id}/edit`);
      // (`/users/${user_id}/edit`);能准确找到需要改动的数据，需要在router里面定义ID
      //  edit(user_id) {
      // this.$router.push(`/users/${user_id}/edit`);二级路由跳转链接方法三
    }
  }
};
</script>
<style>
table {
  border: 1px black;
  border-collapse: collapse;
}
</style>


