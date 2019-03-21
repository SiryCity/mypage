<template lang="pug">
  div.main
    icon-area(:icon='icon')
    profile-area
      h3 Web Engineer & Web Designer
      h1 大同太郎
      h2 DAIDOOOO Taroo
      p 1994.11.15 (24)
      p.
        2017-19年, 大同大学 大学院 情報学研究科にてWebエンジニアリングを専攻. 
        2019年, 在学中にフリーランスエンジニアとして活動を開始. 
    icon-area(:icon='js')
    profile-area
      h4 I ♥ JavaScript
      p.
        参画したプロジェクトでは主にJavasctipt, 時々Pythonを用いて開発を行っています. 
        WebアプリケーションやPRサイトの制作, 業務効率化システムの開発など... 
        活動で得た知見は各所で発信しています.
      div.link-area
        nuxt-link(to='https://twitter.com/sirycity'): img(:src='twitter')
        nuxt-link(to='https://github.com/SiryCity'): img(:src='github')
        nuxt-link(to='https://notice-js.com'): img(:src='link')
    icon-area(:icon='photo')
    profile-area
      h4 I ♥ challenging
      p.
        積極的な活動と斬新なアイデアは中小規模の団体や学生の武器だと考えています. 
        Webコンテンツに興味はあるけどお金が... なんて方がいたら, 
      nuxt-link(to='/contact') お話を聞かせてください :)
    icon-area(:icon='nagoya')
    profile-area
      h4 I ♥ Nagoya
      p.
        生まれ育った名古屋を拠点に活動しています. 
        名古屋は重工業の街ですが,だからこそITの可能性が溢れていると考えています!
        ITを活用したビジネスをお考えの方も,
      nuxt-link(to='/contact') お話を聞かせてください :)
    
        
</template>

<script>
import IconArea from '~/components/IconArea.vue'
import ProfileArea from '~/components/ProfileArea.vue'

import icon from '~/assets/icon.svg'
import photo from '~/assets/photo.svg'
import js from '~/assets/js.svg'
  import link from '~/assets/link.svg'
  import twitter from '~/assets/twitter.svg'
  import github from '~/assets/github.svg'
import nagoya from '~/assets/nagoya.svg'

export default {
  components: {
    IconArea,
    ProfileArea
  },
  computed: {
    icon: () => icon,
    photo: () => photo,
    js: () => js,
      link: () => link,
      twitter: () => twitter,
      github: () => github,
    nagoya: () => nagoya
  } 
}
</script>

<style lang="stylus" scoped>
.main
  width 100%
  min-height calc(var(--static100vh, 100vh) - 20px)
  padding-top calc(var(--static100vh, 100vh) / 2 - 164px)
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  align-content center
</style>


