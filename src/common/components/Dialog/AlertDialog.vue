<template lang="pug">  
  v-dialog(:value="show" :height="height"  :width="width" persistent)
    v-card.dialog-alert
      .dialog-alert__image
        v-img(v-bind:src="require('@/assets/'+imgPath)" max-width="67")

      .dialog-alert__title {{ title }}
      .dialog-alert__message {{ message }}
      .dialog-alert__button
        Button.dialog-alert__msg-button(
          color="secondary" 
          width="150"
          @click="onSubmit"
          ) {{ btnMessage}}
    
</template>

<script>
import Button from "@/common/components/Button"

export default {
  name: "AlertDialog",

  components: {
    Button
  },

  props: {
    show: Boolean,
    height: { type: [String, Number], default: 299 },
    width: { type: [String, Number], default: 500 },
    title:  { type: String, default: "Title Alert"},
    message:  { type: String, default: "Message Alert" },
    imgPath: { type: String, default: "alert-circle-primary.png" },
    btnMessage: { type: String, default: "Back to Dashboard" }
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

  .dialog-alert
    &__image
      display: flex
      justify-content: center
      align-items: center
      padding-top: 48.67px
      
    &__title
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      letter-spacing: -0.0044em
      margin: 25px
      @include body-text-1-opensans

    &__message
      display: flex
      align-items: center
      text-align: center
      letter-spacing: -0.0044em
      padding: 0px 37px 37px 37px
      @include new-body-text-2

    &__button
      display: flex      
      justify-content: center      
      align-items: center
      text-align: center
      padding-bottom: 42px

    &__msg-button
      @include tiny-reg

</style>
