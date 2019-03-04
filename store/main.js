
export const getters = {
  isSP: () => /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
}

export const mutations = {
  //画面1個分の高さをセットする
  setStatic100vh(){
    /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
    && document.documentElement.style.setProperty(
      `${window.outerHeight}px`
    )
  },

}

