<template lang="pug">
  div.news-area(:class='[$store.getters["main/isSP"]? "news--SP": "news--PC"]')
    div.news-card(
      v-for='(card, i) in $store.getters["news/news"]'
      :key='`news${i}`'
    )
      time {{card.date}}
      div {{card.text}}
</template>

<style lang="stylus" scoped>

.news-area
  width calc(100% - 32px)
  max-width calc(360px - 32px)
  margin 16px
  word-wrap break-word
  overflow scroll
  box-sizing border-box
  border-radius 10px
  box-shadow 0 3px 6px #ccc

.news--SP
  height calc(var(--static100vh, 100vh) - 20px - 360px - 32px - 90px)
.news--PC
  height 328px

.news-card
  width 96%
  margin 10px 2%
.news-card > time
  font-weight bold
  display inline-block
  margin 5px 0 3px
.news-card > hr
  margin 0
.news-card > div
  margin-bottom 10px
</style>

