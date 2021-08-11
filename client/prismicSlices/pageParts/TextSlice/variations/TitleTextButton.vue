<template>
  <div>title + text + button variant</div>
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

    button: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
