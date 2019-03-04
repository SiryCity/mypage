<template lang="pug">
  div#root
    div#root__wrapper
      nuxt
    menu-bar
    footer#footer &copy; 2019
</template>

<script>
import MenuBar from '~/components/MenuBar.vue'
export default {
  components:{
    MenuBar
  },
  mounted(){
    this.$store.commit['main/setStatic100vh']
  }
}
</script>

<style lang="stylus">
html
  font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  color #111
  background-color #eee

*
*before
*after
  box-sizing border-box
  margin 0
body
  margin 0
:root
  --static100vh 100vh
#root
  width 100%
  display flex
  flex-direction column
  align-items center
  position relative

#root__wrapper
  width 100%
  max-width 720px
  overflow scroll

#footer
  width 100%
  height 20px
  color #eee
  background-color #333
  text-align center
</style>

