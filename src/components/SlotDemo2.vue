<template>
  <ul>
    <li 
      v-for="todo in filteredTodos" 
      :key="todo.id"
    >
      <slot name="todo" :todo="todo">
       {{todo.text}}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SlotDemo2',
  data () {
    return {
      filteredTodos: [
        {id: 0, text: '你好0', isComplete: true},
        {id: 1, text: '你好1', isComplete: false},
      ]
    }
  }
}
</script>