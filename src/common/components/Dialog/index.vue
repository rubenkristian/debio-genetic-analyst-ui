<template lang="pug">
  v-dialog(:value="show" :height="height"  :width="width" persistent)
    v-card.dialog-card
      .dialog-card__title {{ title }}
      .dialog-card__message {{ message }}
      .dialog-card__button
        Button(
          color="secondary" 
          width="150"
          @click="onSubmit"
          ) {{ btnMessage }}
      
</template>

<script>
import Button from "@/common/components/Button"

export default {
  name: "Dialog",

  components: {
    Button
  },

  props: {
    show: Boolean,
    height: { type: [String, Number], default: 276 },
    width: { type: [String, Number], default: 500 },
    title: { type: String, default: "Dialog Title" },
    message:{ type: String, default: "Dialog Message"},
    btnMessage: { type: String, default: "OK"}
  },

  methods: {
    closeDialog() {
      this.$emit("close")
    },

    onSubmit() {
      this.$emit("click")
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "@/common/styles/mixins.sass"

  .dialog-card
    padding: 55px 1px
    &__title
      display: flex
      align-items: center
      text-align: center
      letter-spacing: -0.0044em
      margin: 0px 47px
      width: 205px
      height: 40px
      @include body-text-medium-1

    &__message
      display: flex
      align-items: center
      text-align: center
      letter-spacing: -0.004em
      padding-top: 18px
      margin: 18px 33px
      @include body-text-3-opensans

    &__button
      display: flex      
      justify-content: center      
      align-items: center
      text-align: center
      padding-top: 37px


</style>
