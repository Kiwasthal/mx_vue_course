const app = Vue.createApp({
  data() {
    return {
      myName: 'Panos',
      myAge: 27,
      number: null,
      randomImage: '',
    };
  },
  methods: {
    calculateNum() {
      let randomNum = Math.floor(Math.random() * 10);
      this.number = randomNum;
      this.randomImage = `https://picsum.photos/${randomNum}`;
      return randomNum;
    },
  },
});

app.mount('#assignment');
