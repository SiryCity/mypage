<template lang="pug">
  div.main
    icon-area(:icon='icon')
    profile-area
      h3 Web Engineer & Web Designer
      h1 大同太郎
      h2 DAIDOOOO Taroo
      p 2017-19年, 大同大学 情報学研究科にて情報学(JavaScript, Python)を専攻.
      p 2019年, 在学中に名古屋市を拠点としてフリーランスエンジニアの活動を開始.
      p 2019年3月現在, 元気にやってます :)
    icon-area(:icon='icon')
    profile-area
      h2 JavaScriptで世界がhappy<3<3<3
      p JavaScriptを用いたWebアプリケーションやPRサイト,
      p JavaScript + Pythonを用いた業務効率化システムの開発に加え,
      p 活動で得た知見を各所で発信しています.
      p 宜しければご覧ください :)▼
      div.link-area
        a(href='#'): img(:src='twitter')
        a(href='https://github.com/SiryCity'): img(:src='github')
        a(href='#'): img(:src='link')
</template>

<script>
import IconArea from '~/components/IconArea.vue'
import ProfileArea from '~/components/ProfileArea.vue'

import icon from '~/assets/icon.svg'
import link from '~/assets/link.svg'
import twitter from '~/assets/twitter.svg'
import github from '~/assets/github.svg'

export default {
  components: {
    IconArea,
    ProfileArea
  },
  computed: {
    icon: () => icon,
    link: () => link,
    twitter: () => twitter,
    github: () => github,
  } 
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
  align-content center
</style>


