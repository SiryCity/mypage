<template lang="pug">
  div.main
    iframe.form-area(
      :src='apiKey',
      width='100%',
      height='100%',
      frameborder='0',
      marginheight='0',
      marginwidth='0'
    )
    p loading now ...
</template>

<script>
export default {
  asyncData(context){
    return{
      apiKey:`https://docs.google.com/forms/d/e/${context.env.FORMS_API}/viewform?embedded=true`
    }
  },
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  height calc(var(--static100vh, 100vh) - 20px)
  display flex
  justify-content center
  align-items center
  position relative
    p
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      font-weight bold

.form-area
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  margin auto

</style>


