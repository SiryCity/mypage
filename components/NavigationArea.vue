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
  bottom 80px
  right 0
  left 0
  margin auto
  pointer-events none
.links
  height 30px
  line-height 30px
  font-size 22px
  font-weight bold
  padding 4px
  margin-bottom 2px
  color #333
  text-decoration none
  text-align center
  transition-duration .2s
  transition-property margin-right
  pointer-events auto
  margin-right 5px
.links:hover
.links--active
  margin-right 15px
</style>