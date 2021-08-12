<template>
  <div>text variant</div>
</template>

<script>
export default {
  name: 'SimpleText',
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
