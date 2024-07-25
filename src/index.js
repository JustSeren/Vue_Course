import * as Vue from "vue/dist/vue.esm-bundler.js";

//v-if
//v-else
const app = Vue.createApp({
  template: `
      <button v-on:click="increment()"> Increment </button>
      <p> {{count}}</p>
      <div v-for="number in evenList">
        <div>
            {{number}} 
        </div>
      </div>
    `,

  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    //its only rendering even number in numbers array
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
  },
  methods: {
    increment() {
      this.count += 1;
    },
    isEven(val) {
      return val % 2 == 0;
    },
    isOdd(val) {
      return val % 2 != 0;
    },
  },
});
app.mount("#app");
