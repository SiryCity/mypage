<template lang="pug">
  div.profile-area: slot
</template>

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
  
  h1
    margin 16px 0 -4px
    padding 0
    font-size 42px
    font-weight normal

    &:first-letter
      color #0073c2

  h2
    margin -4px 0 22px
    padding 0
    font-size 16px

  h3
    margin 4px 0 0px
    padding 0
    font-size 16px

  h4
    margin 0 0 22px
    padding 0
    font-size 20px

  p
    display block
    word-wrap break-word
    padding 0
    margin 0
    line-height 170%

  div
    display flex
    justify-content flex-start
    height 28px
    margin 16px 0 0

    a
      width 28px
      height 28px
      margin 0 4px 0 0

      img
        width 28px
        height 28px
</style>

