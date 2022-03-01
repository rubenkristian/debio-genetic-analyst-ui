<template lang="pug">
  .dialog-error
    v-dialog(:value="show" width="400" height="535" persistent)
      v-card
        v-app-bar(flat dense color="white")
          v-spacer
          v-btn(icon @click="closeDialog")
            v-icon mdi-close

        v-card-text(align="center")          
          .dialog-error__title {{ title }}

          .dialog-error__image
            v-img(v-bind:src="alertIcon" max-width="100")
            
          .dialog-error__desc {{ message }}

          .dialog-error__button
            Button.dialog-error__button-msg(
              color="secondary" 
              width="170"
              height="35"
              @click="closeDialog"
              ) Dismiss
</template>

<script>
import Button from "@/common/components/Button"
import alertIcon from "@/assets/alert-triangle.png"

export default {
  name: "ErrorDialog",

  data: () => ({
    alertIcon
  }),

  components: {
    Button
  },

  props: {
    show: Boolean,
    title: { type: String, default: "Title"},
    message:  { type: String, default: "Message" }
  },

  methods: {
    closeDialog() {
      this.$emit("close")
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "@/common/styles/mixins.sass"

  .dialog-error
    &__title
      display: flex
      justify-content: center
      align-items: center
      letter-spacing: 0.0044em
      margin-top: 31px
      @include h6-opensans

    &__image
      margin-top: 60px
      margin-bottom: 50px

    &__desc
      padding: 0px 60px
      @include body-text-2

    &__button
      display: flex      
      justify-content: center      
      align-items: center
      text-align: center
      margin-top: 64.5px
      padding-bottom: 42px

    &__button-msg
      @include tiny-reg

</style>
