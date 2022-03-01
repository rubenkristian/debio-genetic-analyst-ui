import { createLocalVue, shallowMount } from "@vue/test-utils"
import ErrorDialog from "@/common/components/Dialog/ErrorDialog"
import Button from "@/common/components/Button" 
import Vuetify from "vuetify"
import Vue from "vue"

Vue.use(Vuetify)
const localVue = createLocalVue()
document.body.setAttribute("data-app", true)

describe("Error Dialog", () => {
  let vuetify
  let container
  let stubs = { Button }

  beforeEach (() => {
    vuetify = new Vuetify()
  })

  it("Should render", () => {
    container = shallowMount(ErrorDialog, {
      propsData: { show: true }
    })
  })
  
  it("Should render dialog with title, message and button with default value", () => {
    container = shallowMount(ErrorDialog, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.text()).toContain("Title")
    expect(container.text()).toContain("Message")
    expect(container.text()).toContain("Dismiss")
  
  })

  it("Should render dialog with custom title, message, and button value", () => {
    const propsData = {
      show : true,
      title : "Custom Title",
      message : "Custom Message"
    }  
  
    container = shallowMount(ErrorDialog, {
      localVue,
      vuetify,
      stubs,
      propsData
    })
    
    expect(container.text()).toContain(propsData.title)
    expect(container.text()).toContain(propsData.message)
  })

  it("Should render dialog with image ", () => {
    container = shallowMount(ErrorDialog, {
      localVue,
      vuetify,
      stubs
    })

    const alertIcon = "alert-triangle.png"
    const image = container.find(alertIcon).selector
    expect(image).toBe(alertIcon)
  })

  it("Should render dialog with button component", () => {
    container = shallowMount(ErrorDialog, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.findComponent(Button).exists()).toBe(true)
  })

  it("Should render dialog with button in secondary color and widht 170", () => {
    container = shallowMount(ErrorDialog, {
      vuetify,
      stubs
    })

    expect(container.findComponent(Button).props().color).toBe("secondary")
    expect(container.findComponent(Button).props().width).toBe("170")

  })


  it("Should render dialog with button message 'Dismiss' ", () => {

    container = shallowMount(ErrorDialog, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.findComponent(Button).text()).toBe("Dismiss")
  })
})

