<template>
  <section
    class="projects-grid-slice"
    :class="colorThemeClass"
  >
    <div class="container">
      <div class="projects-grid-slice__content">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.link.url"
          target="_blank"
          :class="[
            'project-card',
            displayCardButton ? '' : 'project-card--without-button'
          ]"
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
          <UIArrowButton v-if="displayCardButton" />
        </a>
      </div>
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
      projects: this.slice.items,
      displayCardButton: this.slice.primary.displayCardButton,
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
    background-color: $bgcolor--white-primary;
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
    background-color: $bgcolor--black;
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
    @include font('Inter', 28px, 600);
    margin-top: 27px;
    line-height: 32px;
    letter-spacing: -0.013em;
  }
  &__description {
    @include font('Inter', 17px, 400);
    margin-top: 21px;
    line-height: 25px;
    letter-spacing: -0.013em;
  }
  .ui-arrow-button {
    margin-top: 50px;
  }
}
</style>
