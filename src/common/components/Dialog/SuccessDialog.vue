<template lang="pug">
  .dialog-success
    v-dialog(:value="show" height="500" width="400" persistent )
      v-card 
        v-app-bar( flat dense color="white" ) 
          v-spacer
          v-btn(icon @click="closeDialog")
            v-icon mdi-close 

        v-card-text
          .dialog-success__title {{ title }}

          .dialog-success__image
            v-img(v-bind:src="checkCircle" max-width="80")

          .dialog-success__message Your genetic data has been submitted.
          .dialog-success__message Do you want to proceed request analysis?

          .dialog-success__border 
            .dialog-success__border-text A feature that allows you to request genetic/DNA analysis to Genetic Analyst in DeBio AppChain based on the genetic data uploaded

          .dialog-success__buttons
            Button(
              width="140"
              color="secondary"
              style="font-size: 10px;"
              outlined
              @click="toGeneticDataList"
            ) Maybe Later
            Button(
              width="140"
              color="secondary"
              style="font-size: 10px;"
              @click="toReqAnalysis"
            ) Proceed to Request

</template>

<script>
import Button from "@/common/components/Button"
import checkCircle from "@/assets/check-circle-primary.png"

export default {
  name: "SuccessDialog",

  components: {
    Button
  },

  data: () => ({
    checkCircle
  }),


  props: {
    show: Boolean,
    title: { type: String, default: "Title" }
  },

  methods: {
    closeDialog() {
      this.$emit("close")
    },

    toGeneticDataList() {
      this.$router.push({ name: "customer-genetic-data" })
    },

    toReqAnalysis() {
      this.$router.push({ name: "customer-request-analysis"})
    }
  }
}
</script>


<style lang="sass" scoped>
  @import "@/common/styles/mixins.sass"

  .dialog-success
    &__title
      display: flex
      justify-content: center
      align-items: center
      letter-spacing: 0.0044em
      margin-top: 12px
      @include h6-opensans

    &__image
      display: flex
      justify-content: center
      align-items: center
      margin: 30px 0px

    &__message
      align-items: center
      text-align: center
      letter-spacing: -0.0075em
      margin: 0px 27px
      @include button-2

    &__border
      border: 1px solid #E9E9E9
      border-radius: 4px
      margin: 20px 27px

    &__border-text
      padding: 12px 16px
      display: flex
      align-items: center
      text-align: justify-start
      letter-spacing: -0.004em
      @include body-text-3-opensans

    &__buttons
      padding: 0px 27px 40px 27px
      display: flex
      justify-content: space-between
      align-items: center      


</style>
