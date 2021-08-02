/* eslint-disable no-shadow */
export const state = () => ({
  currentLanguage: 'en',
})

export const mutations = {
  SET_LANGUAGE(state, lang) {
    state.currentLanguage = lang
  },
}

export const actions = {
  switchLanguage({ commit, state }) {
    const lang = state.currentLanguage === 'en' ? 'ru' : 'en'
    commit('SET_LANGUAGE', lang)
    this.$i18n.setLocale(lang)
  },
}

export const getters = {
  currentLanguage(state) {
    return state.currentLanguage
  },
}
