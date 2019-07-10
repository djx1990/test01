<template>

     <Row type='flex'>
             <Button type="primary">aaa</Button>

        <Col :span="24" >
            <Table border stripe :columns="columns1" :data='data1'>
              
            </Table>
        </Col>
     </Row>
  <!-- </div> -->
</template>

<script>
import { Table,  Row, Col, Button } from "iview";

export default {
  components: {
    Table,
    // Modal,
    Row,
    Col,
    Button,
    // Icon,
  },
  name: "",
  props: {},
  data() {
    return {
      user: {},
      content: '',
      modal1: false,
      columns1: [
        {
          title: "name",
          key: "name",
          fixed: "left",
          width: 200,
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "data",
          key: "data"
    
        },
        {
          title: "age",
          key: "age"
     
        },
        {
          title: "Address",
          key: "Address"
    
        },
        {
          title: "a",
          key: "a"
     
        },
        {
          title: "b",
          key: "b"
   
        },
        {
          title: "c",
          key: "c"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary"
                  },
                  style: {
                    marginRight: "10px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "show"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error"
                  },
                  style: {
                    width: "50px"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "x"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          data: "new data",
          name: "a",
          age: 18,
          Address: "sadf",
          a: "s",
          b: "d",
          c: "d"
        },
        {
          data: "new data",
          name: "c",
          age: 30,
          Address: "sa",
          a: "d",
          b: "d",
          c: "d",
          cellClassName: {
            age: "demo-table-info-cell-age"
          }
        },
        {
          name: "b",
          age: 20,
          Address: "s",
          a: "d",
          b: "d",
          c: "d"
        },
        {
          name: "j",
          age: 18,
          Address: "d",
          a: "d",
          b: "d",
          c: "d"
        },
        {
          name: "q",
          age: 18,
          Address: "f",
          a: "d",
          b: "d",
          c: "d"
        }
      ],
      
    };
  },
  // created () {
  //   this.$http.get('/users').then((res) => {
  //     // console.log(res.data)
  //   })
  // },
  methods: {
    show(index) {
      this.modal1 = true
      this.user = this.data1[index]
    },
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    remove(index) {
      this.data1.splice(index, 1);
    }
  }
};
</script>
<style>
</style>


