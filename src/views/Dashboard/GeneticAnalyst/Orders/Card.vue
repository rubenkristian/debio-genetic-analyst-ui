<template lang="pug">
  .ga-order-details__card
    .ga-order-details__card-body
      p.ga-order-details__card-title(v-if="title" :title="title" :aria-label="title") {{ title }}
      slot
</template>

<script>

export default {
  name: "OrderCard",

  props: {
    title: { type: [String, Number], default: null }
  }
}
</script>

<style lang="sass">
  @import "@/common/styles/mixins.sass"

  .ga-order-details
    &__card
      padding: 30px
      border: 2px solid #F5F7F9
      border-radius: 8px

    &__card-title
      @include button-2
</style>
