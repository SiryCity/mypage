<template lang="pug">
  div.main
  //-
    form(name='contact', method='POST', netlify='')
      p
        label
          | Your Name: 
          input(type='text', name='name')
      p
        label
          | Your Email: 
          input(type='email', name='email')
      p
        label
          | Your Role: 
          select(name='role[]', multiple='')
            option(value='leader') Leader
            option(value='follower') Follower
      p
        label
          | Message: 
          textarea(name='message')
      p
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
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  align-content flex-start
</style>


