const app = Vue.createApp({
  data() {
    return {
      courseGoalA: '<i>test_one</i>',
      courseGoalB: 'test_two',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      if (randomNum < 0.5) return this.courseGoalA;
      return this.courseGoalB;
    },
  },
});

app.mount('#user-goal');
