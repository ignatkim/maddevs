<template>
  <div>title + text variant</div>
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
  },
}
</script>
