<template lang="pug">
  div.profile-card
    div.profile-card__top
      h2 Web Engineer
      h1 大同 太郎
      h3 DAIDOOOO Taroo
    div.profile-card__bottom
      div.profile-card__bottom__side
        a.anchor(href='#')
          img(:src='link')
        a.anchor(href='#')
          img(:src='twitter')
        a.anchor(href='#')
          img(:src='github')
      div.profile-card__bottom__side
        h4 JavaScript
        h4 Python
        h5 HTML
        h5 CSS
</template>

<script>
import link from '~/assets/link.svg'
import twitter from '~/assets/twitter.svg'
import github from '~/assets/github.svg'
export default {
  computed: {
    link: () => link,
    twitter: () => twitter,
    github: () => github,
  } 
}
</script>


<style lang="stylus" scoped>
.profile-card
  width calc(100% - 32px)
  max-width calc(360px - 32px)
  height 328px
  margin 16px
  display flex
  flex-wrap wrap
  writing-mode vertical-rl
  white-space nowrap
.profile-card__top
  width 100%
  height 50%
  display flex
  flex-direction column
  justify-content center

.profile-card__bottom
  width 100%
  height 50%
  display flex
  flex-direction column
  justify-content space-between

.profile-card__top > h1
  font-size 48px
  margin 0
  font-weight normal
.profile-card__top > h2
  font-size 17px
  margin 7px 0 0 8px
.profile-card__top > h3
  font-size 16px
  margin 7px 0 0 0

.profile-card__bottom__side
  display flex
  flex-direction column
  align-items flex-end

.profile-card__bottom__side > h4
.profile-card__bottom__side > h5
  color #999
  font-size 16px
  margin 1px

.anchor
  width 28px
  height 28px
  margin 2px 2px 0

.anchor > img
  width 28px
  height 28px
</style>

