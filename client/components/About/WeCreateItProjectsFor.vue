<template>
  <section
    id="we-create-it-projects"
    class="we-create-it-projects"
    data-testid="test-we-create-it-projects"
  >
    <div class="container">
      <div class="we-create-it-projects__content-wrapper">
        <h2 class="we-create-it-projects__main-title">
          We create <br>
          IT projects for:
        </h2>
        <div class="we-create-it-projects__projects-list">
          <div
            v-for="[first, second] in industriesEntries"
            :key="first"
            class="we-create-it-projects__project-item"
          >
            <p class="we-create-it-projects__paragraph">
              {{ first }}
              <br>
              {{ second }}
            </p>
          </div>
        </div>
        <ul class="we-create-it-projects__flags-list">
          <li
            v-for="country in countries"
            :key="country"
            class="we-create-it-projects__flag-item"
          >
            <img
              :data-src="require(`@/assets/img/Home/flags/${country}.svg`)"
              :alt="country"
              width="32"
              height="32"
              class="img_lazy"
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { countries, industriesEntries } from '@/data/projectsFor'

export default {
  name: 'WeCreateItProjectsFor',

  data() {
    return {
      // if will be added or removed country, need to change css grid, on line 94 and 178
      countries,
      industriesEntries,
    }
  },
}
</script>

<style lang="scss" scoped>
.we-create-it-projects {
  &__content-wrapper {
    padding: 0 45px 45px;
    text-align: center;
    background-color: $bgcolor--white;
  }

  &__projects-list {
    margin: 0 0 63px;
    display: flex;
    flex-wrap: wrap;
  }

  &__project-item {
    padding: 0;
    flex: 0 0 auto;
    width: 33%;
    @media screen and (max-width: 576px) {
      padding: 0;
      flex: 0 0 auto;
      width: 50%;
      &:nth-child(2n) {
        padding-left: 26px;
        box-sizing: border-box;
      }
    }
  }

  &__flags-list {
    display: grid;
    grid-template-columns: repeat(22, max-content);
    justify-content: space-between;
  }

  &__flag-item {
    display: block;
    width: 32px;
    height: 23px;

    img {
      display: block;
      width: 32px;
      height: 23px;
      transition: opacity 0.3s ease-in;
    }
  }

  &__main-title,
  &__paragraph {
    color: $text-color--black-lighter;
  }

  &__main-title {
    @include h2-title;
    padding-top: 40px;
    margin-bottom: 23px;

    br {
      display: none;
    }
  }

  &__paragraph {
    @include font('Inter', 18px, 400);
    letter-spacing: -0.02em;
    line-height: 34px;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1270px) {
  .we-create-it-projects__paragraph {
    font-size: 16px;
  }
}

@media only screen and (max-width: 1040px) {
  .we-create-it-projects {
    &__content-wrapper {
      padding: 0 33px 45px;
    }

    &__projects-type_list {
      margin: 0 0 40px;
    }

    &__flag-item {
      width: 21px;
      height: 15px;

      img {
        width: 21px;
        height: 15px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .we-create-it-projects__main-title br {
    display: block;
  }
}

@media screen and (max-width: 834px) {
  .we-create-it-projects {
    &__paragraph {
      font-size: 14px;
      line-height: 25px;
    }

    &__main-title {
      padding-top: 33px;
      margin-bottom: 3px;

      br {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  .we-create-it-projects__flags-list {
    grid-template-columns: repeat(11, max-content);
    grid-row-gap: 19px;
  }
}

@media only screen and (max-width: 606px) {
  .we-create-it-projects__main-title br {
    display: block;
  }
}

@media only screen and (max-width: 576px) {
  .we-create-it-projects {
    background-color: $bgcolor--white;

    &__main-title {
      padding-top: 34px;
      margin-bottom: 1px;

      br {
        display: block;
      }
    }

    &__content-wrapper {
      padding-left: 0;
      padding-right: 0;
      text-align: left;
    }

    &__paragraph {
      font-size: 16px;
      line-height: 33px;
      letter-spacing: -0.02em;
    }

    &__flag-item {
      width: 23px;
      height: 19px;

      img {
        width: 23px;
        height: 19px;
      }
    }

    &__projects-type_list {
      margin: 0 0 27px;
    }
  }
}

@media only screen and (max-width: 345px) {
  .we-create-it-projects__paragraph {
    font-size: 14px;
  }
}
</style>
