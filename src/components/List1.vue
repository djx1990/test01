<template>
<div style="height: 500px">
  <Row type='flex'>
    <Col :span=24>
    <ul>
      <li v-for="(user, index) in users" :key="index" >
        {{ user.name }}-{{ user.age }}
        <Button @click="del(index)">x</Button>
        <button @click="edit(index)">edit</button>
        <button @click="top(index)">top</button>
      </li>
      <input type="text" v-model="new_user.name">
      <input type="number" v-model="new_user.age">
      <button @click="add">add</button>
      <div v-if="show">
        <input type="text" v-model="user.name">
        <input type="number" v-model="user.age">
        <button @click="save()">save</button>
      </div>
    </ul>
    </Col>
  </Row>
  </div>
</template>

<script>
import { Row, Col } from 'iview';
export default {
  name: "List1",
  props: {},
  components:{
    Row,
    Col
  },
  data() {
    return {
      users: [],
      new_user: [
        {
          name: "",
          age: ""
        }
      ],
      user: [
        {
          name: "",
          age: ""
        }
      ],
      show: false
      // show: false
    };
  },
  methods: {
    del(index) {
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
    edit(index) {
      this.show = true;
      this.user = this.users[index];
      this.userIndex = index;
    },
    save() {
      this.$http.put("/users/" + this.user.id).then(res => {
        //console.log(res);
        if (res.data.status === 1) {
          this.users.splice(this.userIndex, 1, this.user);
          this.show = false;
          alert("success");
        } else {
          alert("fail");
        }
      });
    },
    top(index) {
      let currentTop = this.users[index];
      this.$http.post("/posts/" + this.user.id + "/top").then(res => {
        if (res.data.status === 1) {
          this.users.splice(index, 1);
          this.users.unshift(currentTop);
          alert("success");
        } else {
          alert("fail");
        }
      });
    },
    add() {
      this.$http.post("/users", this.new_user).then(res => {
        //console.log(res);
        if (res.data.status === 1) {
          this.users.push(this.new_user);
          this.new_user = {
            name: "",
            age: ""
          };
          alert("success");
        } else {
          alert("fail");
        }
      });
    }
  },
  created() {
    this.$http.get("/users").then(res => {
      this.users = res.data.users;
    });
  }
};
</script>
<style>
/*li{
  display: inline-block;
  margin
}*/
</style>
