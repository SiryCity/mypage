<template lang="pug">
  div.main
    card-area: my-profile
    div.news(:class='[$store.getters["main/isSP"]? "news--SP": "news--PC"]'): my-news
</template>

<script>
import CardArea from '~/components/CardArea.vue'
import MyProfile from '~/components/MyProfile.md.vue'
import MyNews from '~/components/MyNews.md.vue'

export default {
  components: {
    CardArea,
    MyProfile,
    MyNews
  },
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  height 100vh
  margin-top 128px
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
.news
  width calc(100% - 32px)
  max-width calc(360px - 32px)
  margin 16px
  word-wrap break-word

.news--SP
  height auto
  overflow visible
.news--PC
  height 328px
  overflow scroll
</style>


