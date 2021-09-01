import { mapActions } from 'vuex'

const headerMixin = selector => ({
  asyncData({ store }) {
    store.dispatch('setHeaderTransparentArea', selector)
    store.dispatch('setHeaderTransparent', true)
  },

  destroyed() {
    this.setHeaderTransparentArea(null)
    this.setHeaderTransparent(false)
  },

  methods: {
    ...mapActions(['setHeaderTransparentArea', 'setHeaderTransparent']),
  },
})

export default headerMixin
