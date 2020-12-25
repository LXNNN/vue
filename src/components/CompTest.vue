<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{datas}}</h2>
    <ul>
      <li v-for="item in commentIds" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CompTest',
  data () {
    return {
      msg: '我是子组件'
    }
  },
  props: ['datas', 'commentIds'],
}
</script>