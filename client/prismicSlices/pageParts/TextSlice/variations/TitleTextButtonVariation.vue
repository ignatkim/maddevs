<template>
  <div>title + text + button variant</div>
</template>

<script>
export default {
  name: 'TitleTextButtonVariation',
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

    button: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>
