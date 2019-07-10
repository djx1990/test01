<template>
  <div>
    <input type="text" v-model="user.name">
    <input type="text" v-model="user.age">
    <input type="text" v-model="user.favs">
    <button @click="save">baochun</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: "",
        favs: ""
      }
    };
  },
  created() {
    this.$http.get(`/users/${this.$route.params.id}`).then(res => {
      this.user = res.data.user;
    });
  },
  // 为了传递数据，使input框填满内容，既原来的内容在相应的input框内
  methods: {
    save() {
      this.$http
        .put(`/users/${this.$route.params.id}`, { user: this.user })
        .then(res => {
          if (res.data.status === 1) {
            this.$router.push("/table1");
            alert("success");
          } else {
            alert("fail");
          }
        });
    }
  }
};
</script>
