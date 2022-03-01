import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils"
import Button from "@/common/components/Button"
import Vue from "vue"
import Vuetify from "vuetify"

Vue.use(Vuetify)

const localVue = createLocalVue()
let vuetify

describe("Button Component", () => {
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it("Should render", () => {
    const buttonComponent = mount(Button)

    expect(buttonComponent.exists()).toBe(true)
  })

  it("Should render button as a link", () => {
    const buttonComponent = mount(Button, {
      propsData: {
        to: "/"
      },
      stubs: {
        RouterLink : RouterLinkStub
      }
    })

    expect(buttonComponent.element.tagName == "A").toBe(true)
  })

  it("Should render with custom color", () => {
    const buttonComponent = mount(Button, {
      localVue,
      vuetify,
      propsData: { color: "rgb(86, 64, 165)"}
    })

    expect(buttonComponent.attributes("style")).toContain("background-color: rgb(86, 64, 165)")
  })

  it("Should render with custom height", () => {
    const buttonComponent= mount(Button, {
      localVue,
      vuetify,
      propsData: { height: "50px"}
    })

    expect(buttonComponent.attributes("style")).toContain("height: 50px")
  })

  it("Should render with custom width", () => {
    const buttonComponent= mount(Button, {
      localVue,
      vuetify,
      propsData: { width: "50px"}
    })

    expect(buttonComponent.attributes("style")).toContain("width: 50px")
  })

  it("Should render outlined button", () => {
    const buttonComponent = mount(Button, {
      localVue,
      vuetify,
      propsData: { outlined: true}
    })

    expect(buttonComponent.classes()).toContain("v-btn--outlined")
  })

  it("Should render dark button", () => {
    const buttonComponent = mount(Button, {
      localVue,
      vuetify,
      propsData: { dark: true}
    })

    expect(buttonComponent.classes()).toContain("theme--dark")
  })

  it("Should render disable button", () => {
    const buttonComponent = mount(Button, {
      localVue,
      vuetify,
      propsData: { disabled: true}
    })

    expect(buttonComponent.classes()).toContain("v-btn--disabled")
  })
})
