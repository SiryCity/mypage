<template lang="pug">
  div.card
    img(:src='card.src')
    h2 {{card.title}}
    div {{card.org}}
    div {{card.text}}
</template>

<script>
export default {
  props:['card'],
}
</script>

<style lang="stylus">
.card
  width calc(100% - 32px)
  max-width calc(360px - 32px)
  height 328px
  margin 16px
.card__img
  width 100%
  height 105px
  object-fit contain
</style>

