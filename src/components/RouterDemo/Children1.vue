<template>
  <div>
    我是children1
    {{$router.history.current.params.id}}
  </div>
</template>

<script>
export default {
  name: 'Children1',
  mounted () {
    console.log(this.$router.history.current.params.id)
  }
}
</script>