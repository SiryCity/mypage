import shibata279 from '~/assets/works/shibata279.jpg'
import jsnotice from '~/assets/works/jsnotice.svg'
import FourLetters from '~/assets/works/4-letters.svg'


export const getters = {
  works: () =>
    [
      {
        src: jsnotice,
        title: 'JavaScriptに関するお知らせ',
        url: 'https://jsnotice.com/',
        org: '個人制作',
        join: 2019,
        text: 'JavaScriptを中心とした技術ブログ。',
      },
      {
        src: shibata279,
        title: '柴田アクティブストリート',
        url: 'https://shibataactivestreet.com/',
        org: '名古屋市南区様',
        join: 2017,
        text: '名古屋市商店街にぎわい創出事業から誕生した商店街活性化プロジェクト。',
      },
      {
        src: null,
        title: 'RPA(業務効率化)',
        url: null,
        org: '匿名希望様',
        join: 2018,
        text: '既存のネットショップと社内データベースの統合と自動化。',
      },
      {
        src: FourLetters,
        title: '四文字予定',
        url: 'https://only-four.com',
        org: '個人制作',
        join: 2019,
        text: '「予定は・四文字・要を得て」四文字しか書けない超シンプル予定表。',
      },
      {
        src: null,
        title: 'Webアプリ(仮)',
        url: null,
        org: '個人制作',
        join: 2019,
        text: '1か月1アプリを目指して随意制作中!!!',
      },
    ]
}