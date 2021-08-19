<template>
  <section
    class="customer-logo-slice"
    :class="colorThemeClass"
  >
    <div class="container">
      <div
        data-aos="fade-up"
        class="customer-logo-slice_list"
      >
        <div
          v-for="(item, i) of slice.items"
          :key="`customer-logo-slice-${i}`"
          class="customer-logo-slice_logo"
        >
          <img
            width="143"
            height="64"
            :src="item.logo.url"
            :alt="item.logo.alt"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'CustomerLogoSlice',

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  computed: {
    colorThemeClass() {
      if (this.slice?.primary?.colorTheme === 'white') return 'customer-logo-slice--white-theme'
      return 'customer-logo-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
.customer-logo-slice {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &_list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-gap: 20px;

    @media only screen and (max-width: 1300px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media only screen and (max-width: 1160px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 14px;
    }

    @media only screen and (max-width: 834px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media only screen and (max-width: 640px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 520px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 360px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &_logo {
    width: 100%;
    min-height: 111px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 8px;
    box-sizing: border-box;

    img {
      width: 143px;
      height: 64px;
      display: block;
    }

    @media only screen and (max-width: 1024px) {
      min-height: 81px;

      img {
        width: 75px;
        height: 33px;
      }
    }
  }

  // ---- Themes ---- //
  &--white-theme {
    background-color: #fff;

    .customer-logo-slice_logo {
      background-color: #fff;
    }
  }
  &--black-theme {
    background-color: #111213;

    .customer-logo-slice_logo {
      background-color: #191A1B;
    }
  }
}
</style>
