<template>
  <section class="customer-logo-slice">
    <div class="container">
      <h2 v-if="slice.primary.title">
        {{ slice.primary.title }}
      </h2>
      <p v-if="slice.primary.description[0].text">
        {{ slice.primary.description[0].text }}
      </p>
      <div class="customer-logo-slice_list">
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
export default {
  name: 'CustomerLogoSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
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

  h2 {
    width: 100%;
    text-align: center;
    @include h2-title;
    width: max-content;
    color: #101113;
    padding-bottom: 4px;
  }

  p {
    width: 680px;
    text-align: center;
    @include font('Inter', 14px, 400);
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #101113;

    @media only screen and (max-width: 834px) {
      width: 395px;
    }
  }

  &_list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-gap: 20px;
    margin-top: 40px;

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
    background-color: #191A1B;
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
}
</style>
