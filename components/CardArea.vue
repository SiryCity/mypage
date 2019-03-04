<template lang="pug">
  div.card: slot
</template>

<script>
export default {
  props:['md'],
}
</script>

<style lang="stylus">
.card
  width calc(100% - 32px)
  max-width calc(360px - 32px)
  height 328px
  margin 16px
.card img
  width 100%
  height 105px
  object-fit contain
</style>

