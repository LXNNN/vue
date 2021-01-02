<template>
  <div>
    <header>
      <slot name="header" :slotDemo="slotDemo"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotDemo',
  data () {
    return {
      slotDemo: '插槽props'
    }
  }
}
</script>