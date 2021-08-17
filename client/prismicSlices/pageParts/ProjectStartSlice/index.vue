<template>
  <section class="project-start-slice">
    <div class="container">
      <h2 class="project-start-slice__title">
        Quick Project Start
      </h2>
      <div class="project-start-slice__list">
        <div
          v-for="(step, idx) in steps"
          :key="step.name"
          class="project-start"
        >
          <div class="project-start__icons">
            <img
              v-lazy-load
              :data-src="require(`@/assets/img/Home/svg/qickProjectIcons/${step.name}.svg`)"
              :alt="step.name"
              width="52"
              height="73"
              class="project-start__main-icon"
            >
            <img
              v-if="idx !== steps.length - 1"
              v-lazy-load
              :data-src="require(`@/assets/img/Home/svg/qickProjectIcons/arrow.svg`)"
              width="165"
              height="65"
              class="project-start__arrow-icon"
              alt="Arrow"
            >
          </div>
          <div class="project-start__text">
            <h3 class="project-start__title">
              {{ step.name }}
            </h3>
            <p class="project-start__description">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
      <UIOutlinedButton
        class="project-start-slice__button"
        @click="$refs.modalOrderProjectFromUs.show()"
      >
        Submit your project
      </UIOutlinedButton>
    </div>
    <ModalOrderProjectFromUs
      id="order-project-from-us-modal"
      ref="modalOrderProjectFromUs"
      :location="'\'Submit your project\' button, about page'"
    />
  </section>
</template>

<script>
import { steps } from '@/data/quickProjectStart'
import UIOutlinedButton from '@/components/shared/UIOutlinedButton'

export default {
  name: 'ProjectStartSlice',
  components: {
    UIOutlinedButton,
    ModalOrderProjectFromUs: () => import('@/components/core/modals/ModalOrderProjectFromUs'),
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

  data() {
    return {
      steps,
    }
  },

  methods: {
    show() {
      if (!this.$refs?.modalOrderProjectFromUs?.show) return
      this.$refs.modalOrderProjectFromUs.show()
    },
  },
}
</script>

<style lang="scss" scoped>
.project-start-slice {
  text-align: center;
  &__title {
    @include h2-title;
    color: $text-color--white;
    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 4%;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }
  &__button {
    margin-top: 47px;
    @media screen and (max-width: 960px) {
      margin-top: 37px;
    }
  }
}

.project-start {
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    text-align: left;
    flex-direction: row;
    align-items: flex-start;
  }
  &__icons {
    display: flex;
  }
  &__main-icon,
  &__arrow-icon {
    display: block;
    height: 65px;
  }
  &__main-icon {
    width: 32px;
    margin-bottom: 8px;
    padding: 0 10px;
    @media screen and (max-width: 960px) {
      width: 24px;
    }
    @media screen and (max-width: 767px) {
      width: 28px;
    }
  }
  &__arrow-icon {
    width: 16vw;
    max-width: 165px;
    position: absolute;
    margin-left: 4.7vw;
    margin-bottom: 3px;
    opacity: 0.3;
    @media screen and (max-width: 1280px) {
      width: 10vw;
      margin-left: 5.7vw;
    }
    @media screen and (max-width: 960px) {
      width: 8vw;
      max-width: 84px;
      margin-left: 7.5vw;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &__text {
    @media screen and (max-width: 767px) {
      margin-top: 16px;
      margin-left: 13px;
    }
  }
  &__title {
    @include font('Poppins', 32px, 700);
    line-height: 32px;
    letter-spacing: -1px;
    text-transform: capitalize;
    color: $text-color--red;
    @media screen and (max-width: 960px) {
      font-size: 18px;
      line-height: 21px;
    }
    @media screen and (max-width: 767px) {
      font-size: 27px;
      line-height: 32px;
    }
  }
  &__description {
    @include font('Inter', 14px, 400);
    margin-top: 8px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.02em;
    color: $quick-project-description-color;
    @media screen and (max-width: 960px) {
      margin-top: 4px;
      font-size: 10px;
      line-height: 15px;
    }
    @media screen and (max-width: 767px) {
      text-align: left;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
