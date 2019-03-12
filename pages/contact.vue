<template lang="pug">
  div.main
    form.form-area(name='contact', method='POST', netlify)
      p お気軽にどうぞ :)
      label Name 名前
        input(type='text', name='name')
      label Email メールアドレス
        input(type='email', name='email')
      label Message 内容
        textarea(name='message')
      button(type='submit') Send
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  min-height calc(100vh - 20px)

.form-area
  width calc(100% - 64px)
  height 296px
  margin 16px
  padding 16px
  display flex
  flex-direction column
  justify-content center
  border-radius 10px
  box-shadow 0 3px 6px #ccc
</style>


