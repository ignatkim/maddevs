<template>
  <div class="container">
    <section class="cta-banner-slice">
      <div class="cta-banner-slice__info">
        <h2 class="cta-banner-slice_title">
          {{ slice.primary.title }}
        </h2>
        <p class="cta-banner-slice_description">
          {{ slice.primary.description }}
        </p>
        <UIButton @click="goToDeliveryPage">
          {{ slice.primary.btnText }}
          <img
            width="20"
            height="20"
            src="@/assets/img/common/arrow-up-right.svg"
            alt="arrow"
          >
        </UIButton>
      </div>
      <img
        width="395"
        height="490"
        class="cta-banner-slice__image"
        :src="slice.primary.image.url"
        :alt="slice.primary.image.alt"
      >
      <div class="cta-banner-slice__man">
        <h6 class="cta-banner-slice__man-name">
          {{ slice.primary.name }}
        </h6>
        <span class="cta-banner-slice__man-position">
          {{ slice.primary.position }}
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'CtaBannerSlice',
  components: {
    UIButton,
  },

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  methods: {
    goToDeliveryPage() {
      this.$router.push(this.slice.primary.btnLink.url)
    },
  },
}
</script>

<style lang="scss" scoped>
.cta-banner-slice {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  background-color: $bgcolor--silver;
  padding: 85px 105px;
  @media screen and (max-width: 1280px) {
    padding: 85px 40px;
  }
  @media screen and (max-width: 992px) {
    padding: 40px;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: space-between;
    padding: 40px 32px 0;
  }

  /deep/ .ui-button {
    display: flex;
    align-items: center;
    padding: 14px 24px;

    img {
      margin-left: 7px;
    }
  }

  &_title {
    @include font('Inter', 42px, 700);
    max-width: 590px;
    line-height: 46px;
    letter-spacing: -0.04em;
    margin-bottom: 16px;

    @media screen and (max-width: 900px) {
      max-width: 500px;
      font-size: 28px;
      line-height: 32px;
    }

    @media screen and (max-width: 768px) {
      max-width: 100%;
      text-align: center;
      letter-spacing: -0.05em;
      margin-bottom: 16px;
    }

    @media screen and (max-width: 370px) {
      font-size: 34px;
    }
  }

  &_description {
    font-weight: normal;
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -0.013em;
    margin-bottom: 40px;
    max-width: 420px;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 992px) {
      max-width: 350px;
    }
    @media screen and (max-width: 900px) {
      max-width: 320px;
    }
    @media screen and (max-width: 768px) {
      max-width: 100%;
      font-size: 17px;
      line-height: 24px;
      margin-bottom: 19px;
      text-align: center;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }

  &__image {
    width: auto;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 100px;
    image-rendering: pixelated;
    @media screen and (max-width: 1280px) {
      right: 90px;
    }
    @media screen and (max-width: 1180px) {
      height: 85%;
    }
    @media screen and (max-width: 900px) {
      right: 0;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
      height: auto;
      position: static;
    }
    @media screen and (max-width: 375px) {
      width: calc(100% + 50px);
      margin: auto -25px 0;
    }
  }

  &__man {
    min-width: 158px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 36px;
    left: 546px;
    @media screen and (max-width: 1280px) {
      left: 423px;
      bottom: 24px;
    }
    @media screen and (max-width: 992px) {
      left: 380px;
    }
    @media screen and (max-width: 768px) {
      bottom: 24px;
      left: 24px;
      padding: 5px;
    }

    &-name {
      @include font('Inter', 14px, 600);
      line-height: 18px;
      display: block;
      letter-spacing: -0.4px;
      color: #111111;
      background-color: #FCFCFD;
      padding: 0 8px;
    }

    &-position {
      @include font('Inter', 14px, 400);
      line-height: 18px;
      display: block;
      margin-top: 2px;
      letter-spacing: -0.4px;
      background-color: #FCFCFD;
      padding: 0 8px;
      color: #111111;
      @media screen and (max-width: 768px) {
        margin-top: 0;
      }
    }
  }
}
</style>
