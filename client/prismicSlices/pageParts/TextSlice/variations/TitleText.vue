<template>
  <div class="text-slice__content">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TitleText',
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

    colorTheme: {
      type: String,
      default: 'white',
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
    margin-top: 50px;
    @media screen and (max-width: 1024px) {
      margin-top: 30px;
    }
    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }
}
</style>
