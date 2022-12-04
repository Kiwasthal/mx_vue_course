const app = Vue.createApp({
  data() {
    return {
      name: '',
      counter: 0,
      confirmedName: '',
    };
  },
  methods: {
    submitForm() {
      alert('submitted');
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove() {
      this.counter--;
    },
    updateName(event, lastname) {
      this.name = event.target.value + ' ' + lastname;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount('#events');
