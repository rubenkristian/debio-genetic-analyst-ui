import { createLocalVue, shallowMount } from "@vue/test-utils"
import Dialog from "@/common/components/Dialog"
import Vuetify from "vuetify"
import Button from "@/common/components/Button" 
import Vue from "vue"

Vue.use(Vuetify)
const localVue = createLocalVue()
document.body.setAttribute("data-app", true)

describe("Common Dialog", () => {
  let vuetify 
  let container
  let stubs = { Button }

  beforeEach (() => {
    vuetify = new Vuetify()
  })


  it("Should render", () => {
    shallowMount(Dialog, {
      propsData: { show: true }
    })
  })


  it("Should render dialog with title, message and button with default value", () => {  
    container = shallowMount(Dialog, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.text()).toContain("Dialog Title")
    expect(container.text()).toContain("Dialog Message")
    expect(container.text()).toContain("OK")

  })

  it("Should render dialog with custom title, message, and button value", () => {
    const propsData = {
      show : true,
      title : "Custom Dialog Title",
      message : "Custom Dialog Message",
      btnMessage : "Custom Dialog Button Message"
    }  
  
    container = shallowMount(Dialog, {
      localVue,
      vuetify,
      stubs,
      propsData
    })
    
    expect(container.text()).toContain(propsData.title)
    expect(container.text()).toContain(propsData.message)
    expect(container.text()).toContain(propsData.btnMessage)

  })

  it("Should render dialog with button component", () => {
    container = shallowMount(Dialog, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.findComponent(Button).exists()).toBe(true)
  })

  it("Should render dialog with button in secondary color and widht 150", () => {
    container = shallowMount(Dialog, {
      vuetify,
      stubs
    })

    expect(container.findComponent(Button).props().color).toBe("secondary")
    expect(container.findComponent(Button).props().width).toBe("150")

  })

  it("Should render dialog with customize button message", () => {
    const propsData = {
      btnMessage : "Custome message"
    }

    container = shallowMount(Dialog, {
      localVue,
      vuetify,
      stubs,
      propsData
    })

    expect(container.findComponent(Button).text()).toBe("Custome message")
  })
}) 
