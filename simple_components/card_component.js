const card_component = {
  props: {
    title: {
      type: String,
      required: true
    },
    list: Array
  },
  template: '<div style="border-style:solid; display:table-cell;padding:5px;"><h3>{{title}}</h3><ul><li v-for="item in list">{{item}}</li></ul></div>'
}