<template>
  <div class="key-metrics-slice__content">
    <h2 class="key-metrics-slice__title">
      Mad Devs’ key metrics
    </h2>
    <div class="key-metrics-slice__grid">
      <div
        v-for="metric in metrics"
        :key="metric.title"
        class="key-metric"
      >
        <h3 class="key-metric__title">
          {{ metric.title }}
        </h3>
        <p class="key-metric__subtitle">
          {{ metric.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WithTopTitle',
  props: {
    metrics: {
      type: Array,
      required: true,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>
.key-metrics-slice {
  &__title {
    @include font('Inter', 42px, 900);
    line-height: 46px;
    letter-spacing: -1.3px;
    margin-bottom: 28px;
    color: $text-color--black-oil;
    text-align: center;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
  &__grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}

.key-metric {
  border-radius: 4px;
  padding: 24px 32px;
  background-color: white;
  &__title {
    @include font('Inter', 28px, 700);
    line-height: 32px;
    letter-spacing: -1px;
  }
  &__subtitle {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;
  }
}
</style>
