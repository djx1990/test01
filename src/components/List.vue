<template>
  <div id="app">
    <ul v-for="(item, index) in items" :key="index">
      <li>{{ index + 1 }}</li>
      <li>{{ item.name }}</li>
      <li>{{ item.age }}</li>
      <li>
        <button @click="del(index)">del</button>
        <button @click="edit(index)">edit</button>
        <button @click="top(index)">top</button>
      </li>
    </ul>
    <p>
      <input type="text" v-model="new_item.name">
      <input type="number" v-model="new_item.age">
      <button @click="add">add</button>
    </p>
    <div v-if="show">
      <input type="text" v-model="item.name">
      <input type="number" v-model="item.age">
      <button @click="save()">save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      items: [
        {
          name: "a",
          age: 21
        },
        {
          name: "b",
          age: 10
        },
        {
          name: "c",
          age: 32
        }
      ],
      new_item: [
        {
          name: "",
          age: ""
        }
      ],
      show: false,
      itemIndex: "",
      index: "",
      item: []
    };
  },
  methods: {
    del(index) {
      this.items.splice(index, 1);
    },
    edit(index) {
      this.item = this.items[index];
      this.itemIndex = index;
      this.show = true;
    },
    save() {
      this.items.splice(this.itemIndex, 1, this.item);
      this.show = false;
    },
    add() {
      this.items.push(this.new_item);
      this.new_item = {
        name: "",
        age: ""
      };
    },
    top(index) {
      let currentItem = this.items[index];
      this.items.splice(index, 1);
      this.items.unshift(currentItem);
    }
  }
};
</script>

<style scoped>
ul {
  border: 5px solid black;
  margin: 0;
  text-align: center;
  list-style: none;
  width: 220px;
}
</style>
