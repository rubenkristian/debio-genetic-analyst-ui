import { createLocalVue, mount } from "@vue/test-utils"
import { closeIcon } from "@/common/icons"
import Vue from "vue"
import Vuetify from "vuetify"
import Modal from "@/common/components/Modal"
import Icon from "@/common/components/Icon"

Vue.use(Vuetify)

const localVue = createLocalVue()

describe("Modal Component", () => {
  const stubs = { UiDebioIcon: Icon }
  let container
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it("Should render", () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.exists()).toBe(true)
  })

  it("Should render", () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.exists()).toBe(true)
    expect(container.classes()).not.toContain("ui-debio-modal--active")
  })

  it("Should show modal", () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        show: true
      }
    })

    expect(container.classes()).toContain("ui-debio-modal--active")
  })

  it("Should show modal with custom title", () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        show: true,
        title: "Custom modal title"
      }
    })

    const title = container.find(".ui-debio-modal__card-title").element.innerHTML

    expect(container.classes()).toContain("ui-debio-modal--active")
    expect(title.replace(/<\/?span[^>]*>/g, "")).toBe("Custom modal title")
  })
  
  it("Should show modal with custom cta title", () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        show: true,
        ctaTitle: "Custom cta modal title"
      }
    })

    const ctaTitle = container.find(".v-btn__content").element.innerHTML

    expect(container.classes()).toContain("ui-debio-modal--active")
    expect(ctaTitle).toBe("Custom cta modal title")
  })

  it("Should not show modal cta", () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        show: true,
        showCta: false
      }
    })

    const cta = container.find(".ui-debio-modal__card-cta")

    expect(container.classes()).toContain("ui-debio-modal--active")
    expect(cta.exists()).toBe(false)
  })

  it("Should not show modal title", () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        show: true,
        showTitle: false
      }
    })

    const title = container.find(".ui-debio-modal__card-title")

    expect(container.classes()).toContain("ui-debio-modal--active")
    expect(title.exists()).toBe(false)
  })

  it("Should render modal with icon", () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        show: true,
        icon: closeIcon
      }
    })

    const icon = container.find(".ui-debio-modal__card-icon")

    expect(container.classes()).toContain("ui-debio-modal--active")
    expect(icon.exists()).toBe(true)
  })

  it("Should emited close modal", async () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        show: true
      }
    })

    const closeButton = container.find(".ui-debio-modal__card-close")
    closeButton.vm.$emit("onClose", false)
    await closeButton.vm.$nextTick()

    expect(closeButton.emitted("onClose")[0][0]).toBeFalsy()
  })

  it("Should called cta action", async () => {
    const customAction = jest.fn()

    container = mount(Modal, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        show: true,
        ctaAction: customAction
      }
    })

    const button = container.find("button")
    await button.trigger("click")
    await button.vm.$nextTick()

    expect(customAction).toBeCalled()
  })

  it("Should remove dismiss icon", async () => {
    container = mount(Modal, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        show: true,
        disableDismiss: true
      }
    })
    
    expect(container.find(".ui-debio-modal__card-close").exists()).toBe(false)
  })
})
