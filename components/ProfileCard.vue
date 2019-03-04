<template lang="pug">
  div.card
    img.card__img(:src='card.src')
    div {{card.job}}
    h1 {{card.name}}
    div {{card.ruby}}
    div(v-if='card.texts' v-for='text in card.texts') {{text}}
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

