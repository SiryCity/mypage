<template lang="pug">
  img.icon-area(:src='icon')
</template>

<script>
export default {
  props: ['icon']
}
</script>

<style lang="stylus" scoped>
.icon-area
  width calc(100% - 64px)
  max-width calc(360px - 64px)
  height 296px
  margin 16px
  padding 16px
  border-radius 10px
  box-shadow 0 3px 6px #ccc
</style>

