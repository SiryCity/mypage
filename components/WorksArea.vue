<template lang="pug">
  article.works
    img(:src='works.src')
    div.works__bottom
      h2 {{works.title}}
      h3 {{`${works.org} ${works.join}-`}}
      div {{works.text}}
      a.anchor(:href='works.url'): img(:src='link')
</template>

<script>
import link from '~/assets/link.svg'
export default {
  props:['works'],
  computed: {
    link: () => link,
  } 
}
</script>


<style lang="stylus" scoped>
.works
  width calc(100% - 32px)
  height 328px
  margin 16px
  overflow hidden
  border-radius 10px
  box-shadow 0 3px 6px #ccc
.works > img
  width 100%
  height 203px
  object-fit cover
  background-color #ccc
.works__bottom
  width 96%
  height 125px
  padding 0 2%
  position relative
  color #333
  text-decoration none

.works__bottom > h2
  height 28px
  line-height 28px
  font-size 20px
  margin 3px 0 0
.works__bottom > h3
  font-size 16px
  margin 2px 0 8px 0

.anchor
  width 28px
  height 28px
  position absolute
  right 4px
  bottom 8px

.anchor > img
  width 28px
  height 28px
</style>

