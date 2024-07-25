import * as Vue from "vue/dist/vue.esm-bundler.js";

const Num = {
  props: ["number"],
  template: `
    <div  v-bind:class="getClass(number)">
    {{number}}
    </div>
    `,
  methods: {
    getClass(number) {
      return this.isEven(number) ? "blue" : "red";
    },

    isEven(val) {
      return val % 2 == 0;
    },
  },
};

const app = Vue.createApp({
  components: {
    Num,
  },
  template: `
      <button v-on:click="increment()"> Increment </button>
      <p> {{count}}</p>
      <hello greeting="Hello"/>
       <hello greeting="Hi"/>
      <input 
        type = "checkbox"
        v-model="value"
        value="a"
        />
        <input 
        type = "checkbox"
        v-model="value"
        value="b"
        />
        {{ value }}
        <div class="red"> {{error}}</div>

      <num
        v-for="number in numbers"
       v-bind:number="number"
      />
    `,

  data() {
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5],
      value: ["a", "b"],
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
    increment() {
      this.count += 1;
    },

    isOdd(val) {
      return val % 2 != 0;
    },
  },
});
app.mount("#app");
