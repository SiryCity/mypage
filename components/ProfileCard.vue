<template lang="pug">
  div.profile-card
    img(:src='card.src' alt='')
    div.profile-card__wrapper
      h2 {{card.job}}
      h1 {{card.name}}
      h3 {{card.ruby}}
      div(v-if='card.texts' v-for='text in card.texts') {{text}}
</template>

<script>

export default {
  props:['card'],
}
</script>

<style lang="stylus" scoped>
.profile-card
  width calc(100% - 32px)
  max-width calc(360px - 32px)
  height 328px
  margin 16px
  display flex
  flex-direction column
  justify-content center
  align-items center
.profile-card > img
  width 100%
  height 105px
  object-fit contain
.profile-card__wrapper
  display flex
  flex-direction column
  justify-content center
  margin-left -20px
.profile-card__wrapper > h2
  font-size 16px
.profile-card__wrapper > h1
  font-size 34px
  margin -5px 0 -20px
.profile-card__wrapper > h3
  font-size 16px
.profile-card__wrapper > div
  line-height 1.3

</style>

