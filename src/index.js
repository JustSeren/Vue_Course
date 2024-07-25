import * as Vue from "vue/dist/vue.esm-bundler.js";

//v-on:input="input"
//event name = functşon name
const app = Vue.createApp({
  template: `
      <button v-on:click="increment()"> Increment </button>
      <p> {{count}}</p>
      <input 
        v-bind:value="value"
        v-on:input="input" 
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
      value: "user",
      error: "",
    };
  },
  computed: {
    //its only rendering even number in numbers array
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
  },
  methods: {
    input($event) {
      console.log($event.target.value);
      this.value = $event.target.value;
      if (this.value.length < 5) {
        this.error = "must be grater than 5";
      } else {
        this.error = "";
      }
    },
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
