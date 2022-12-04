let app = Vue.createApp({
  data() {
    return {
      popupText: 'Assignment Two!',
      userInput: '',
      confirmedUserInput: '',
    };
  },
  methods: {
    alertPopup() {
      alert(this.popupText);
    },
    updateUserInput(e) {
      this.userInput = e.target.value;
    },
    updateConfirmedUserInput(e) {
      this.confirmedUserInput = e.target.value;
    },
  },
});

app.mount('#assignment');
