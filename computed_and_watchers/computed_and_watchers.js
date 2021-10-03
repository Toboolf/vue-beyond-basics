var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    watchedDate: new Date()
  },
  computed: {
    computedMessage: function() {
      return 'Alhoo polizhia number ' + this.counter
    },
    computedDateNoChanges: function() {
      return new Date() 
    },
    computedDateChanging: function () {
      this.counter
      return new Date()
    }
  },
  watch: {
    counter: function() {
      this.watchedDate = new Date()
    }
  },
  methods: {
    updateValue() { this.counter++ }
  },
  mounted() {
    setInterval(this.updateValue, 1000)
  }
})