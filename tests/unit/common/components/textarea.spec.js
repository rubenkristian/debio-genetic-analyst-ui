import { createLocalVue, mount } from "@vue/test-utils"
import Textarea from "@/common/components/Textarea"
import Vue from "vue"
import Vuetify from "vuetify"

Vue.use(Vuetify)

const localVue = createLocalVue()


describe("Textarea component", () => {

  let container
  let vuetify

  beforeEach(() => {
    vuetify= new Vuetify()

    const nodeCrypto = require("crypto")

    global.crypto = {
      getRandomValues: (buffer) => { return nodeCrypto.randomFillSync(buffer) }
    }
  })

  
  it("Shoould render", () => {
    container = mount(Textarea, {
      localVue,
      vuetify
    })

    expect(container.exists()).toBe(true)

  })

  it("Should render textarea with default variant size", () => {
    container = mount(Textarea, {
      localVue,
      vuetify
    })

    expect(container.classes()).toContain("ui-debio-textarea--default")
  })


  it("Should render textarea with small variant size", () => {
    container = mount(Textarea, {
      localVue,
      vuetify,
      propsData: { variant: "small" }
    })

    expect(container.classes()).toContain("ui-debio-textarea--small")
  })

  it("Should render textarea with large variant size", () => {
    container = mount(Textarea, {
      localVue,
      vuetify,
      propsData: { variant: "large" }
    })

    expect(container.classes()).toContain("ui-debio-textarea--large")
  })

  it("Should render disabled textarea", () => {
    container = mount(Textarea, {
      localVue,
      vuetify,
      propsData: { disabled: true }
    })
    expect(container.classes()).toContain("ui-debio-textarea--disabled")
  })

  it("Should render outlined textarea", () => {
    container = mount(Textarea, {
      localVue,
      vuetify,
      propsData: { outlined: true }
    })
    expect(container.classes()).toContain("ui-debio-textarea--outlined")
  })

  it("Should render error textarea", () => {
    container = mount(Textarea, {
      localVue,
      vuetify,
      propsData: { readOnly: true }
    })

    expect(container.classes()).toContain("ui-debio-textarea--default")
    expect(container.classes()).toContain("ui-debio-textarea--read-only")
  })


  it("Should render props autocomplete with default value off", () => {
    container = mount(Textarea, {
      vuetify
    })

    expect(container.props().autocomplete).toBe("off")
  })


  it("Should render props spellcheck with default value false", () => {
    container = mount(Textarea, {
      vuetify
    })

    expect(container.props().spellcheck).toBe("false")
  })

  it("Should render props label with default value null", () => {
    container = mount(Textarea, {
      vuetify
    })

    expect(container.props().label).toBe(null)
  })

  it("Should render props width with default value 200", () => {
    container = mount(Textarea, {
      vuetify
    })
    
    expect(container.props().width).toBe(200)
  })

  it("Should render props width with customize value", () => {

    const width = 180

    container = mount(Textarea, {
      localVue,
      vuetify,
      propsData: { width }
    })

    expect(container.props().width).toBe(width)
  })


  it("Should render active textarea", async () => {
    container = mount(Textarea, {
      vuetify
    })

    await container.find(".ui-debio-textarea__input").trigger("click")
    expect(container.classes()).toContain("ui-debio-textarea--active")

  })
})
