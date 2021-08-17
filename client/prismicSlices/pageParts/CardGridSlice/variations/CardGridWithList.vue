<template>
  <section
    class="card-grid-with-list-slice"
    :class="colorThemeClass"
  >
    <div class="container">
      <ul>
        <li
          v-for="(item, i) of items"
          :key="`item-${i}`"
          :class="{ 'full-width': item.fullWidth }"
        >
          <h3 v-html="item.title" />
          <p v-html="item.description[0].text" />

          <div
            v-for="(text, j) of item.list && item.list.split(', ')"
            :key="`list-item-${j}`"
          >
            {{ text }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardGridWithListSlice',
  props: {
    colorTheme: {
      type: String,
      default: 'white',
    },

    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    colorThemeClass() {
      if (this.colorTheme === 'white') return 'card-grid-with-list-slice--white-theme'
      return 'card-grid-with-list-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
  .card-grid-with-list-slice {
    background-color: #111213;

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 48px;

      @media screen and (max-width: 1260px) {
        grid-gap: 24px;
      }

      @media screen and (max-width: 1090px) {
        grid-template-columns: 1fr;
      }

      li {
        background-color: #1D1D1F;
        padding: 80px;
        border-radius: 4px;

        @media screen and (max-width: 768px) {
          padding: 32px;
        }

        h3 {
          @include font('Inter', 56px, 800);
          line-height: 60px;
          letter-spacing: -0.013em;
          color: #fff;

          @media screen and (max-width: 1260px) {
            font-size: 40px;
            line-height: 48px;
          }

          @media screen and (max-width: 768px) {
            font-size: 32px;
          }
        }
        p {
          margin-top: 31px;
          @include font('Inter', 20px, 400);
          line-height: 29px;
          letter-spacing: -0.013em;
          color: #fff;
          margin-bottom: 40px;

          @media screen and (max-width: 1260px) {
            margin-top: 16px;
            font-size: 17px;
            line-height: 25px;
          }
        }

        > div {
          color: #fff;
          @include font('Inter', 24px, 400);
          line-height: 140%;
          letter-spacing: -0.013em;
          margin-bottom: 10px;
          position: relative;
          padding-left: 40px;

          @media screen and (max-width: 768px) {
            font-size: 20px;
          }

          &:last-child {
            margin-bottom: 0;
          }

          &:before {
            content: '';
            width: 25px;
            height: 2px;
            background-color: #EC1C24;
            position: absolute;
            top: 16px;
            left: 0;
          }
        }
      }
    }

    .full-width {
      grid-column: auto/span 2;

      @media screen and (max-width: 1090px) {
        grid-column: 1;
      }

      h3,
      p {
        width: 100% !important;
        text-align: center !important;
      }
    }
  }
</style>
