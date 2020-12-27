<template>
  <div>
    路由
    {{ $route.params.id }}
    <!-- {{ids}} -->
    <hr />
    <router-link :to="url1">children1</router-link>
    <router-link :to="url2">children2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'RouterDemo',
  data () {
    return {
      url1: `/router/${this.$route.params.id}/children1`,
      url2: `/router/${this.$route.params.id}/children2`
    }
  },
  mounted () {
    console.log('钩子')
    console.log(this.$route)
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log('路由变化')
      this.url1 = `/router/${this.$route.params.id}/children1`;
      this.url2 = `/router/${this.$route.params.id}/children2`;
    }
  }
}
</script>

<style scoped>

</style>>