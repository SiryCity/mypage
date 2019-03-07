<template lang="pug">
  a.works(:href='works.url')
    img(:src='works.src')
    div.works__bottom
      h2 {{works.title}}
      h3 {{works.org}}
      div {{works.text}}
      img.works__static(:src='link')
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
  max-width calc(360px - 32px)
  height 328px
  margin 16px
  overflow hidden
  border-radius 10px
  box-shadow 0 3px 6px #ccc
  text-decoration none
  color #333
.works > img
  width 100%
  height 203px
  object-fit cover
  background-color #ccc
.works__bottom
  width 96%
  height 125px
  margin 0 2%
  position relative

.works__bottom > h2
  font-size 22px
  margin -18px 0 0 0
.works__bottom > h3
  font-size 16px
  margin 0 0 2px 0

.works__static
  width 30px
  height 30px
  position absolute
  right 4px
  top 24px

</style>

