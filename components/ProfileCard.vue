<template lang="pug">
  div.profile-card
    img(:src='card.src' alt='')
    h2 {{card.job}}
    h1 {{card.name}}
    h3 {{card.ruby}}
    div.svg__wrapper
      div.svg(v-for='svg in card.svgs')
        img(:src='svg' alt='')
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
  align-items flex-start
.profile-card > img
  width 100%
  height 105px
  object-fit contain
.profile-card > h2
  font-size 16px
.profile-card > h1
  font-size 34px
  margin -5px 0 -20px
.profile-card > h3
  font-size 16px
.profile-card > div
  line-height 1.3

.svg__wrapper
  width 100%
  height 30px
  display flex
  justify-content flex-end
.svg__wrapper > div
  width 30px
  height inherit
  margin-left 5px
.svg__wrapper > div > img 
  width inherit
  height inherit
</style>

