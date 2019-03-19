<template lang="pug">
  div.main
    iframe(
      :src='apiKey',
      width='100%',
      height='100%',
      frameborder='0',
      marginheight='0',
      marginwidth='0'
    ) 読み込んでいます...
</template>

<script>
export default {
  asyncData(context){
    console.log(context)
    return{
      apiKey:`https://docs.google.com/forms/d/e/${process.env.FORMS_API}/viewform?embedded=true`
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

.form-area
  width calc(100% - 64px)
  margin 16px
  padding 16px
  display flex
  flex-direction column
  justify-content center
  align-items center
  border-radius 10px
  box-shadow 0 3px 6px #ccc

</style>


