<template>
  <section class="section">
    <CustomerTestimonials :title="slice.primary.title" />
  </section>
</template>

<script>
import CustomerTestimonials from '@/components/About/CustomerTestimonials'

export default {
  name: 'CustomerTestimonialsSlice',
  components: {
    CustomerTestimonials,
  },

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
