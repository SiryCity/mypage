<template lang="pug">
  div#root
    div#root__wrapper
      nuxt
    navigation-area
    footer#footer &copy; 2019 MIZUTANI Ryuto
</template>

<script>
import NavigationArea from '~/components/NavigationArea.vue'
export default {
  components:{
    NavigationArea
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
  color #333
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
  text-align center
  font-weight bold
  color #333
</style>

