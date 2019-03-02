<template lang="pug">
  nav#nav
    nuxt-link.links(to='/' :class='{"links--active": $nuxt.$route.name === "index"}') home
    nuxt-link.links(to='/works' :class='{"links--active": $nuxt.$route.name === "works"}') works
    nuxt-link.links(to='/contact' :class='{"links--active": $nuxt.$route.name === "contact"}') contact
</template>

<style lang="stylus" scoped>
#nav
  width 100%
  max-width 720px
  display flex
  flex-direction column
  align-items flex-end
  position fixed
  bottom 40px
  right 0
  left 0
  margin auto
  pointer-events none

.links
  width 60px
  height 28px
  fonr-size 20px
  padding 4px
  color #111
  text-decoration none
  text-align right
  transition-duration .2s
  transition-property margin-right
  pointer-events auto

.links:hover
  margin-right 7px

.links--active
  margin-right 7px
</style>