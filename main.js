var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    from: 'Select Currency',
    to: 'Select Currency',
    options: [
      { text: 'Dollars' },
      { text: 'Pesos' },
      { text: 'Euros' }
    ]
  },
  methods: {
    selectTo: function(event) {
      this.to = event.target.innerText;
    },
    selectFrom: function(event) {
      this.from = event.target.innerText;
    }
  }
})


// fixer api key: 02c421fa81a751f119aac818f4062b1f
