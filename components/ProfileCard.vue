<template lang="pug">
  div.profile-card
    div.profile-card__top
      h2 Web Engineer
      h1 大同 太郎
      h3 Taroo DAIDOOOO
    div.profile-card__bottom
      h4 JavaScript
      h4 Python
      h5 HTML
      h5 CSS
</template>


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
  justify-content flex-end
  align-items flex-end

.profile-card__top > h1
  font-size 48px
  margin 0 0 0 -4px
  font-weight normal
.profile-card__top > h2
  font-size 17px
  margin 7px 0 0 8px
.profile-card__top > h3
  font-size 16px
  margin 7px 0 0 -4px

.profile-card__bottom > h4
.profile-card__bottom > h5
  color #666
  font-size 16px
  margin 1px

.langs
  color white
</style>

