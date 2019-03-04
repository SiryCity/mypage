<template lang="pug">
  div.main
    div
      works-cards(:card='$store.getters["works/profile"][0]')
    div.news(:class='[$store.getters["main/isSP"]? "news--SP": "news--PC"]')
      news-cards(
        v-for='(card, i) in $store.getters["news/news"]'
        :card='card'
        :key='`news${i}`'
      )
</template>

<script>
import WorksCards from '~/components/WorksCards.vue'
import NewsCards from '~/components/NewsCards.vue'

export default {
  components: {
    WorksCards,
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
  border-top 2px solid #999
  border-bottom 2px solid #999

.news--SP
  height calc(var(--static100vh, 100vh) - 20px - 360px - 32px - 90px)
.news--PC
  height 328px
</style>


