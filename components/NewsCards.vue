<template lang="pug">
  div.news-card
    time {{card.date}}
    div {{card.text}}
    hr
</template>

<script>
export default {
  props:['card'],
}
</script>

<style lang="stylus" scoped>
.news-card > time
  font-weight bold
  display inline-block
  margin 5px 0 3px
.news-card > hr
  margin 0
.news-card > div
  margin-bottom 10px
</style>

