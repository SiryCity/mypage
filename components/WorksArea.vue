<template lang="pug">
  div.works
    img(:src='works.src')
    div.works__bottom
      h2 {{works.title}}
      h3 {{works.org}}
      div {{works.text}}
</template>

<script>
export default {
  props:['works'],
}
</script>

<style lang="stylus" scoped>
.works
  width calc(100% - 32px)
  max-width calc(360px - 32px)
  height 328px
  margin 16px
  overflow hidden
  border-radius 10px
  box-shadow 0 3px 6px #ccc
.works > img
  width 100%
  height 203px
  object-fit contain
  background-color gray
.works__bottom
  width 96%
  height 125px
  margin 0 2%

.works__bottom > h2
  font-size 20px
  margin -16px 0 0 0
.works__bottom > h3
  font-size 16px
  margin 2px 0
</style>

