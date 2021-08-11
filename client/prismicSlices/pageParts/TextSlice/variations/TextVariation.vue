<template>
  <div>text variant</div>
</template>

<script>
export default {
  name: 'TextVariation',
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
