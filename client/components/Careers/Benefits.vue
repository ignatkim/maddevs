<template>
  <div class="benefits container">
    <!-- Item 1 -->
    <div class="benefits_benefit benefits_benefit-1">
      <h2 class="benefits_title">
        {{ $t('careers.section-3.title') }}
      </h2>
      <p
        class="benefits_description"
        v-html="$t('careers.section-3.description')"
      />
      <div class="benefits_list">
        <p v-html="$t('careers.section-3.list')" />
      </div>
    </div>
    <!-- END Item -->

    <!-- Item 2 -->
    <div class="benefits_benefit benefits_benefit-2">
      <h2 class="benefits_title">
        {{ $t('careers.section-4.title') }}
      </h2>
      <p
        class="benefits_description"
        v-html="$t('careers.section-4.description')"
      />
      <div class="benefits_list">
        <p v-html="$t('careers.section-4.list')" />
      </div>
    </div>
    <!-- END Item -->

    <!-- Item 3 -->
    <div class="benefits_benefit benefits_benefit-3">
      <h2 class="benefits_title">
        {{ $t('careers.section-5.title') }}
      </h2>
      <p
        class="benefits_description"
        v-html="$t('careers.section-5.description')"
      />
      <div class="benefits_list">
        <p v-html="$t('careers.section-5.list')" />
      </div>
    </div>
    <!-- END Item -->
  </div>
</template>

<script>
import {
  engineeringCultureBenefits,
  agileDevelopmentBenefits,
  competitiveAndCompensationBenefits,
} from '@/data/benefits'

export default {
  name: 'Benefits',
  data() {
    return {
      engineeringCultureBenefits,
      agileDevelopmentBenefits,
      competitiveAndCompensationBenefits,
    }
  },
}
</script>

<style lang="scss" scoped>
.benefits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 48px;
  padding-bottom: 75px;

  @media screen and (max-width: 992px) {
    grid-gap: 24px;
    padding-bottom: 55px;
  }

  &_benefit {
    display: flex;
    flex-direction: column;
    padding: 80px;
    background-color: #1D1D1F;
    border-radius: 4px;

    &-1 {
      grid-column: 1 / 3;
    }

    &-2 {
      grid-column: 3 / 5;
    }

    &-3 {
      grid-column: 1 / 5;
      text-align: center;
      justify-content: center;
      align-items: center;

      h2,
      p,
      .benefits_list {
        max-width: 650px;
      }
    }

    @media screen and (max-width: 1340px) {
      padding: 50px;
    }

    @media screen and (max-width: 1120px) {
      padding: 32px;
    }

    @media screen and (max-width: 992px) {
      grid-column: 1 / 5 !important;
      align-items: flex-start;
      text-align: left;
    }
  }

  &_title {
    margin-bottom: 40px;
    color: #fff;
    @include font('Inter', 56px, 700);
    letter-spacing: -0.013em;
    line-height: 60px;

    @media screen and (max-width: 1120px) {
      font-size: 38px;
      line-height: 37px;
      margin-bottom: 19px;
      letter-spacing: -0.01em;
    }

    @media screen and (max-width: 1120px) {
      font-size: 30px;
    }
  }

  &_description {
    @include font('Inter', 28px, 700);
    line-height: 38px;
    max-width: 686px;
    color: #F4F4F4;
    letter-spacing: -0.013em;
    margin-bottom: 40px;

    /deep/ .yellow {
      color: #F7C744;
    }

    /deep/ .red {
      color: #DC251C;
    }

    /deep/ .green {
      color: #14c94d;
    }

    @media screen and (max-width: 1120px) {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 19px;
    }
  }

  &_list {
    display: block;

    p {
      letter-spacing: -0.013em;
      @include font('Inter', 17px, 400);
      line-height: 180%;
      color: #A0A0A1;

      @media screen and (max-width: 1120px) {
        font-size: 17px;
        line-height: 28px;
      }
    }
  }
}
</style>
