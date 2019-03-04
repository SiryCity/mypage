<template lang="pug">
  div.main
    profile-card(:card='$store.getters["profile/profile"]')
    div.news(:class='[$store.getters["main/isSP"]? "news--SP": "news--PC"]')
      news-cards(
        v-for='(card, i) in $store.getters["news/news"]'
        :card='card'
        :key='`news${i}`'
      )
</template>

<script>
import ProfileCard from '~/components/ProfileCard.vue'
import NewsCards from '~/components/NewsCards.vue'

export default {
  components: {
    ProfileCard,
    NewsCards
  },
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  height calc(var(--static100vh, 100vh) - 20px)
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  align-content center
.news
  width calc(100% - 32px)
  max-width calc(360px - 32px)
  margin 16px
  word-wrap break-word
  overflow scroll
  box-sizing border-box
  border-top 1px solid #999
  border-bottom 1px solid #999

.news--SP
  height calc(var(--static100vh, 100vh) - 20px - 360px - 32px - 90px)
.news--PC
  height 328px
</style>


