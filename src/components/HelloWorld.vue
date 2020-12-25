<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <div>--------------------------vuex--------------------------</div>
    <h3>{{ $store.state.name }}</h3>
    <div>--------------------------计算属性--------------------------</div>
    <div>{{ fullNames }}</div>
    <button @click="changeName">改变名字</button>
    <!-- <p>Reversed message: "{{ reversedMessage() }}"</p>
    <p>Reversed message: "{{ reversedMessage() }}"</p> -->
    <p>Reversed message: "{{ reversedMessage }}"</p>
    <p>Reversed message: "{{ reversedMessage }}"</p>
    <div>--------------------------循环--------------------------</div>
    <ul>
      <li v-for="item in items" :key="item.id">{{item.name}}</li>
    </ul>
    <div>--------------------------注册子组件--------------------------</div>
    <CompTest datas='哈哈哈' v-bind:comment-ids="[234, 266, 273]"></CompTest>
    <div>--------------------------自定义组件的双重绑定--------------------------</div>
    <base-checkbox v-model="lovingVue"></base-checkbox>
    <p>{{lovingVue}}</p>
      <!-- <price-input :value="price" @input="onInput"></price-input> -->
      <price-input v-model="price"></price-input>
      <p>{{price}}</p>
      <div>--------------------------全局组件的自动注册--------------------------</div>
      <baseInput></baseInput>
      <baseButton></baseButton>
      <baseAreatext></baseAreatext>
      <div>--------------------------监听根元素原生事件--------------------------</div>
      <child @click.native="onClick"></child>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import CompTest from './CompTest'

Vue.component('child', {
  template: '<button>click me</button>'
})

Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

Vue.component('price-input', {
   model: {
      prop: 'value',
      event: 'input'
    },
    // 5、将父组件的value值通过props传递给子组件
    // 1、当有数据输入时触发了该组件的input事件
    template: `<input :value="value" @input="$emit('input', $event.target.value)" type="text">`,
    props: ["value"],
    // methods: {
    //      updateVal: function(val) {
    //         // 2、手动触发父组件的input事件并将值传给父组件
    //         this.$emit('input', val);
    //      }
    //  }
});

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello Word',
      message: 'hello',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      lovingVue: false,
      price: '',
      items: [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'},
        {id: 3, name: 'c'}
      ]
    }
  },
  mounted () {
    // console.log('城市名->',this.$store.state.city)
    // console.log('姓名->',this.$store.state.name)
    // this.$store.commit("setName", 'Lixn')
    axios.get('/api/test/project').then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    changeName: function () {
      this.lastName = '改变了';
      this.message = '改变了'
    },
    // reversedMessage: function() {
    //   console.log('调用方法')
    //   return this.message.split('').reverse().join('');
    // }
    // onInput: function(val) {
    //       this.price = val;
    // }
    onClick: function () {
      alert('监听根元素原生事件')
    }
  },
  computed: {
    fullNames: function () {
      return this.firstName + ' ' + this.lastName
    },
    reversedMessage: function () {
      console.log('调用了计算属性')
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  components: {
    CompTest
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
