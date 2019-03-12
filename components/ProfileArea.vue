<template lang="pug">
  div.profile-area
    h3 Web Engineer
    h3 Web Designer
    h1 大同太郎
    h2 DAIDOOOO Taroo
    p 2017-19年, 大同大学 情報学研究科にて情報学(JavaScript, Python)を専攻.
    p 2019年, 在学中に名古屋市南区を拠点にフリーランス活動を開始.
    p 2019年3月現在, 元気にやってます :)
    div.link-area
      a(href='#'): img(:src='twitter')
      a(href='https://github.com/SiryCity'): img(:src='github')
      a(href='#'): img(:src='link')
      
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
.profile-area
  width calc(100% - 64px)
  max-width calc(360px - 64px)
  height 296px
  margin 16px
  padding 16px
  display flex
  flex-direction column
  justify-content center
  border-radius 10px
  box-shadow 0 3px 6px #ccc

.profile-area > h3
  margin 4px 0
  padding 0
  font-size 16px

.profile-area > h1
  margin 4px 0 -4px
  padding 0
  font-size 42px
  font-weight normal

.profile-area > h1:first-letter
  color #0073c2

.profile-area > h2
  margin -4px 0 14px
  padding 0
  font-size 16px
  
.profile-area > p
  display block
  word-wrap break-word
  padding 0
  margin 0

.link-area
  display flex
  justify-content flex-end
  height 28px

.link-area > a
  width 28px
  height 28px
  margin 8px -10px 0 12px

.link-area > a > img
  width 28px
  height 28px
</style>

