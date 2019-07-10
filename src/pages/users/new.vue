<template>
  <div>
    <input type="text" v-modle="user.name">
    <input type="text" v-modle="user.age">
    <button @click="save">fdas</button>
  </div>
</template>


<script>
export default {
  name: "users_new",
  data() {
    return {
      user: {
        name: "",
        age: ""
      }
    };
  },
  methods: {
    save() {
      // let user = { nickanme: this.user.name, age: this.user.age };此处可以把名字改为和后端命名一样的接口
      this.$http.post("/users", this.user).then(res => {
        if (res.data.status === 1) {
          this.$router.push("/table1");
          alert('success')
        } else {
          alert("fdsa");
        }
      });
    }
  }
};
</script>

<style lang="" scoped>
</style>