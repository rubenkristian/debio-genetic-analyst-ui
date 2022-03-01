import { createLocalVue, shallowMount } from "@vue/test-utils"
import AlertDialog from "@/common/components/Dialog/AlertDialog"
import Button from "@/common/components/Button" 
import Vuetify from "vuetify"
import Vue from "vue"

Vue.use(Vuetify)
const localVue = createLocalVue()
document.body.setAttribute("data-app", true)

describe("Alert Dialog", () => {
  let vuetify
  let container
  let stubs = {Button}

  beforeEach (() => {
    vuetify = new Vuetify()
  })

  it("Should render", () => {
    shallowMount(AlertDialog, {
      propsData: { show: true}
    })
  })

  it("Should render dialog with an customize image", () => {
    const imgPath = "alert-circle.png"
    container = shallowMount(AlertDialog, {
      localVue,
      vuetify,
      propsData : {
        imgPath
      }
    })

    const image = container.find(imgPath).selector
    expect(image).toBe("alert-circle.png")
  })


  it("Should render dialog with title, message and button value", () => {  
    container = shallowMount(AlertDialog, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.text()).toContain("Title Alert")
    expect(container.text()).toContain("Message Alert")
    expect(container.text()).toContain("Back to Dashboard")

  })


  it("Should render dialog with custom title, message, and button value", () => {
    const propsData = {
      show : true,
      title : "Custom Title Alert",
      message : "Custom Message Alert",
      btnMessage : "Custom Dialog Button Message"
    }  
  
    container = shallowMount(AlertDialog, {
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
    container = shallowMount(AlertDialog, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.findComponent(Button).exists()).toBe(true)
  })

  it("Should render dialog with button in secondary color and widht 150", () => {
    container = shallowMount(AlertDialog, {
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

    container = shallowMount(AlertDialog, {
      localVue,
      vuetify,
      stubs,
      propsData
    })

    expect(container.findComponent(Button).text()).toBe("Custome message")
  })

})
