<template>
  <div>
    <Table border stripe width="600" height="200" :columns="columns2" :data="data2"></Table>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      columns2: [
        {
          title: "A",
          key: "a",
          width: 150
        },
        {
          title: "B",
          key: "b",
          width: 150
        },
        {
          title: "C",
          key: "c",
          width: 150
        },
        {
          title: "D",
          key: "d",
          width: 150
        },
        {
          title: "E",
          key: "e",
          width: 150
        },
        {
          title: "Action",
          key: "action",
          render: (h, params) => {
            return h("div");
          }
        }
      ],
      data2: [
        {
          a: "ds",
          b: "as",
          c: "a",
          d: "gh",
          e: "dw"
        },
        {
          a: "dasd",
          b: "addd",
          c: "awqewqw",
          d: "ghadsa",
          e: "dwadsaf"
        },
        {
          a: "dsasd",
          b: "aadsads",
          c: "adddd",
          d: "gasdfh",
          e: "dasdqw"
        },
        {
          a: "ww",
          b: "qq",
          c: "dd",
          d: "aa",
          e: "dd"
        },
        {
          a: "dass",
          b: "as",
          c: "1",
          d: "3",
          e: "2"
        }
      ]
    };
  }
};
</script>
