import icon from '~/assets/icon.svg'

import htmlSVG from '~/assets/html5.svg'
import cssSVG from '~/assets/css3.svg'
import jsSVG from '~/assets/js.svg'
import pySVG from '~/assets/py.svg'

export const getters = {
  profile: () =>
    ({
      src: icon,
      job: 'Web Enginner',
      name: '大同太郎',
      ruby: 'DAIDO Taro',
      svgs: [
        htmlSVG,
        cssSVG,
        jsSVG,
        pySVG
      ],
    })
}