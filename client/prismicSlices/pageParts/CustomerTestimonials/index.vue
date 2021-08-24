<template>
  <CustomerTestimonials
    :title="slice.primary.title"
    :data-aos="slice.primary.animation"
  />
</template>

<script>
import CustomerTestimonials from '@/components/About/CustomerTestimonials'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'CustomerTestimonialsSlice',
  components: {
    CustomerTestimonials,
  },

  mixins: [animateOnScrollMixin({
    offset: 200,
    delay: 50,
    anchorPlacement: 'top-center',
    duration: 1000,
    once: true,
  })],

  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
