Vue.component('card', card_component)

var app = new Vue({
  el: '#app',
  data: {
    cards: [
      { title: "Card 1", list: [1, 2, 3, 4] },
      { title: "Card 2", list: [5, 6, 7, 8] },
      { title: "Card 3", list: [1, 2, 3, 4] },
      { title: "Card 4", list: [1, 2, 3, 4] },
    ]
  }
})