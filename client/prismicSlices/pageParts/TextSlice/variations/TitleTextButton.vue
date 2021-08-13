<template>
  <div class="text-slice__content">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <a
      :href="buttonLink.url"
      target="_blank"
    >
      <button>{{ buttonText }}</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'TitleTextButton',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },

    text: {
      type: String,
      required: true,
      default: '',
    },

    buttonText: {
      type: String,
      required: true,
      default: '',
    },

    buttonLink: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>

.text-slice__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    margin: 50px 0;
    @media screen and (max-width: 1024px) {
      margin: 30px 0;
    }
    @media screen and (max-width: 768px) {
      margin: 20px 0;
    }
  }
}
</style>
