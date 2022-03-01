import { mount } from "@vue/test-utils"
import Input from "@/common/components/Input"
import Vue from "vue"
import Vuetify from  "vuetify"

Vue.use(Vuetify)

describe("Input component", () => {

  let wrapper

  beforeEach(() => {
    const nodeCrypto = require("crypto")

    global.crypto = {
      getRandomValues: (buffer) => { return nodeCrypto.randomFillSync(buffer) }
    }
  })

  it("Should render", () => {
    wrapper = mount(Input)

    expect(wrapper.exists()).toBe(true)
  })

  it("Should render with default autocomplete off", () => {
    wrapper = mount(Input)

    const inputComponent = wrapper.find(".ui-debio-input__input")
    expect(inputComponent.attributes("autocomplete")).toBe("off")
  })

  it("Should render with automplete on", () => {
    wrapper = mount(Input, {
      propsData: { autocomplete: "on " }
    })

    const inputComponent = wrapper.find(".ui-debio-input__input")
    expect(inputComponent.attributes("autocomplete")).toBe("on ")
  })

  it("Should render with default spellcheck off", () => {
    wrapper = mount(Input)

    const inputComponent = wrapper.find(".ui-debio-input__input")
    expect(inputComponent.attributes("spellcheck")).toBe("false")
  })

  it("Should render with spellcheck", () => {
    wrapper = mount(Input, {
      propsData: { spellcheck: "on " }
    })

    const inputComponent = wrapper.find(".ui-debio-input__input")
    expect(inputComponent.attributes("spellcheck")).toBe("true")
  })

  it("Should render with default empty label", () => {
    wrapper = mount(Input)

    const inputComponent = wrapper.find(".ui-debio-input__label")
    expect(inputComponent.exists()).toBe(false)
  })

  it("Should render with custom label", () => {
    wrapper = mount(Input, {
      propsData: { label: "input" }
    })

    const inputComponent = wrapper.find(".ui-debio-input__label")
    expect(inputComponent.attributes("aria-label")).toBe("input")
  })

  it("Should render default width", () => {
    wrapper = mount(Input)

    const inputComponent = wrapper.find(".ui-debio-input")
    expect(inputComponent.attributes("style")).toBe("width: 200px;")
  })

  it("Should render custom width", () => {
    wrapper = mount(Input, {
      propsData: { width: 185 }
    })

    const inputComponent = wrapper.find(".ui-debio-input")
    expect(inputComponent.attributes("style")).toBe("width: 185px;")
  })

  it("Should render with block property", () => {
    wrapper = mount(Input, {
      propsData: { block: true }
    })

    const inputComponent = wrapper.find(".ui-debio-input")
    expect(inputComponent.attributes("style")).toBe("width: 100%;")
  })

  it("Should render with read only property", () => {
    wrapper = mount(Input, {
      propsData: { readOnly: true }
    })

    const inputComponent = wrapper.find(".ui-debio-input__input")
    expect(inputComponent.attributes("readonly")).toBe("true")
  })

  it("Should render with outlined property", () => {
    wrapper = mount(Input, {
      propsData: { outlined: true }
    })

    const inputComponent = wrapper.find(".ui-debio-input")
    expect(inputComponent.classes()).toContain("ui-debio-input--outlined")
  })

  it("Should render with default variant", () => {
    wrapper = mount(Input)

    const inputComponent = wrapper.find(".ui-debio-input--default")
    expect(inputComponent.classes()).toContain("ui-debio-input--default")
  })

  it("Should render with small variant", () => {
    wrapper = mount(Input, {
      propsData: { variant: "small" }
    })

    const inputComponent = wrapper.find(".ui-debio-input--small")
    expect(inputComponent.classes()).toContain("ui-debio-input--small")
  })

  it("Should render with large variant", () => {
    wrapper = mount(Input, {
      propsData: { variant: "large"}
    })

    const inputComponent = wrapper.find(".ui-debio-input--large")
    expect(inputComponent.classes()).toContain("ui-debio-input--large")
  })


})
