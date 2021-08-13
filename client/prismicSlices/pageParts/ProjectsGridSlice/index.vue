<template>
  <section
    class="projects-grid-slice"
    :class="colorThemeClass"
  >
    <div class="container">
      <div
        v-if="title"
        class="projects-grid-slice__head"
      >
        <h2
          v-if="title"
          v-html="title"
        />
        <p
          v-if="subtitle"
          v-html="subtitle"
        />
      </div>
      <div class="projects-grid-slice__content">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.link.url"
          target="_blank"
          :class="`project-card ${project.displayArrowButton ? '' : 'project-card--without-button'}`"
        >
          <div class="project-card__info">
            <img
              :src="project.logo.url"
              :alt="project.logo.alt"
              class="project-card__logo"
            >
            <h3 class="project-card__name">{{ project.name }}</h3>
            <p class="project-card__description">{{ project.description }}</p>
          </div>
          <UIArrowButton v-if="project.displayArrowButton" />
        </a>
      </div>
      <a
        v-if="button.text && button.link"
        :href="button.link.url"
        target="_blank"
        class="projects-grid-slice__button"
      >
        <button>{{ button.text }}</button>
      </a>
    </div>
  </section>
</template>

<script>
import UIArrowButton from '@/components/shared/UIArrowButton'

export default {
  name: 'ProjectsGridSlice',
  components: {
    UIArrowButton,
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
      colorTheme: this.slice.primary.colorTheme,
      title: this.slice.primary.title,
      subtitle: this.slice.primary.subtitle,
      projects: this.slice.items,
      button: {
        link: this.slice.primary.buttonLink,
        text: this.slice.primary.buttonText,
      },
    }
  },

  computed: {
    colorThemeClass() {
      if (this.colorTheme === 'white') return 'projects-grid-slice--white-theme'
      return 'projects-grid-slice--black-theme'
    },
  },
}
</script>

<style lang="scss" scoped>
.projects-grid-slice {
  &--white-theme {
    .project-card {
      background-color: $bgcolor--silver;
      color: $text-color--black-oil;
      &:hover {
        .ui-arrow-button {
          background-color: $text-color--black-oil;
          color: $text-color--white-primary;
        }
      }
      &__description {
        color: $text-color--quote-box;
      }
      .ui-arrow-button {
        border-color: $text-color--black-oil;
        color: $text-color--black-oil;
      }
    }
  }
  &--black-theme {
    .project-card {
      background-color: $bgcolor--black-pale;
      color: $text-color--white-primary;
      &:hover {
        .ui-arrow-button {
          background-color: $text-color--white-primary;
          color: $text-color--black-oil;
        }
      }
      &__description {
        color: $text-color--silver;
      }
      .ui-arrow-button {
        border-color: $text-color--white-primary;
        color: $text-color--white-primary;
      }
    }
  }
  &__head {
    width: 100%;
    max-width: 1028px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 85px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 83px;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 50px;
    }
    h2 {
      @include font('Inter', 80px, 700);
      line-height: 67px;
      letter-spacing: -0.013em;
      @media screen and (max-width: 1024px) {
        font-size: 60px;
        line-height: 60px;
      }
      @media screen and (max-width: 768px) {
        font-size: 40px;
        line-height: 40px;
      }
    }
    p {
      @include font('Inter', 32px, 400);
      line-height: 44px;
      letter-spacing: -0.013em;
      margin-top: 50px;
      @media screen and (max-width: 1024px) {
        margin-top: 29px;
        font-size: 24px;
        line-height: 35px;
      }
      @media screen and (max-width: 768px) {
        margin-top: 21px;
        font-size: 21px;
        line-height: 30px;
      }
    }
    @media screen and (max-width: 485px) {
      /deep/ br {
        display: none;
      }
    }
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    @media screen and (max-width: 1260px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  &__button {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 100%;
    max-width: 393px;
    text-align: center;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  padding: 67px 60px 45px;
  &--without-button {
    padding-bottom: 143px;
  }
  &__logo {
    display: block;
    width: 64px;
    height: auto;
  }
  &__name {
    margin-top: 27px;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -0.013em;
  }
  &__description {
    margin-top: 21px;
    font-size: 17px;
    line-height: 25px;
    letter-spacing: -0.013em;
  }
  .ui-arrow-button {
    margin-top: 50px;
  }
}
</style>
