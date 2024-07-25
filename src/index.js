import * as Vue from "vue/dist/vue.esm-bundler.js";

//v-if
//v-else
const app = Vue.createApp({
  template: `
      <button v-on:click="increment()"> Increment </button>
      <p> {{count}}</p>
      <div v-for="number in numbers">
        <div>
            {{number}} 
            <span v-if="isEven(number)"> Even </span>
            <span v-else="isOdd(number)"> Odd </span>
        </div>
      </div>
      <p>
      <div v-if="isEven(count)"> EVEN </div>
      <div v-else="isOdd(count)"> Odd </div>

    `,

  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5],
    };
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
