<template lang="pug">
  nav#nav
    nuxt-link.links.letter4(to='/' :class='{"links--active": $nuxt.$route.name === "index"}') home
    nuxt-link.links.letter5(to='/works' :class='{"links--active": $nuxt.$route.name === "works"}') works
    nuxt-link.links.letter7(to='/contact' :class='{"links--active": $nuxt.$route.name === "contact"}') contact
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
  height 28px
  font-size 20px
  font-weight bold 
  padding 4px
  color #111
  text-decoration none
  text-align center
  transition-duration .2s
  transition-property margin-right
  pointer-events auto
  margin-right 10px
.links:hover
  margin-right 20px
.links--active
  margin-right 20px
.letter4
  letter-spacing 3.2px
  padding-right 0
.letter5
  letter-spacing 2.3px
  padding-right 0
.letter7
  letter-spacing -1.1px
</style>