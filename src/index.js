import * as Vue from "vue/dist/vue.esm-bundler.js";

/*//v-model is the shorter way of 
        v-bind:value="value"
        v-on:input="input" 
*/
const app = Vue.createApp({
  template: `
      <button v-on:click="increment()"> Increment </button>
      <p> {{count}}</p>
      <input 
        type = "radio"
        v-model="value"
        value="a"
        />
        <input 
        type = "radio"
        v-model="value"
        value="b"
        />
        {{ value }}
        <div class="red"> {{error}}</div>

      <div
        v-for="number in numbers"
        v-bind:class="getClass(number)"
      >
        <div>
            {{number}} 
        </div>
      </div>
    `,

  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5],
      value: "a",
    };
  },
  computed: {
    //its only rendering even number in numbers array
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
    error() {
      if (this.value.length < 5) {
        return "must be grater than 5";
      }
    },
  },
  methods: {
    getClass(number) {
      return this.isEven(number) ? "blue" : "red";
    },
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
