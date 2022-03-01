import { mount, shallowMount } from "@vue/test-utils"
import File from "@/common/components/File"
import Input from "@/common/components/Input"
import Button from "@/common/components/Button"
import Vue from "vue"
import Vuetify from  "vuetify"

Vue.use(Vuetify)


describe("File input component", () => {

  let fileComponent
  const stubs = { UiDebioInput: Input, Button}
  beforeEach(() => {
    const nodeCrypto = require("crypto")

    global.crypto = {
      getRandomValues: (buffer) => { return nodeCrypto.randomFillSync(buffer) }
    }
  })

  it("Should remder", () => {
    fileComponent = mount(File, { stubs })

    expect(fileComponent.exists()).toBe(true)
  })

  it("Should render with only accept file type .docx,.pdf,.doc by default", () => {
    fileComponent = mount(File, {
      stubs
    })

    const input = fileComponent.find(".ui-debio-file__input")
    expect(input.attributes("type")).toBe("file")
    expect(input.attributes("accept")).toContain(".docx,.pdf,.doc")
  })
  
  it("Should render with accept file type .docx", () => {
    fileComponent = mount(File, {
      stubs,
      propsData: { accept: ".docx"}
    })

    const input = fileComponent.find(".ui-debio-file__input")
    expect(input.attributes("type")).toBe("file")
    expect(input.attributes("accept")).toBe(".docx")
  })
  
  it("Should render with accept file type .doc", () => {
    fileComponent = mount(File, {
      stubs,
      propsData: { accept: ".doc"}
    })

    const input = fileComponent.find(".ui-debio-file__input")
    expect(input.attributes("type")).toBe("file")
    expect(input.attributes("accept")).toBe(".doc")
  })

  it("Should render with accept file type .pdf", () => {
    fileComponent = mount(File, {
      stubs,
      propsData: { accept: ".pdf"}
    })

    const input = fileComponent.find(".ui-debio-file__input")
    expect(input.attributes("type")).toBe("file")
    expect(input.attributes("accept")).toBe(".pdf")
  })

  it("Should render with custom label", () => {
    fileComponent = mount(File, {
      stubs,
      propsData: { label: "input"}
    })

    const label = fileComponent.find(".ui-debio-file__label")
    const childComponent = fileComponent.find("span")
    expect(label.attributes("aria-label")).toBe("input")
    expect(childComponent.html()).toBe("<span>input</span>")
  })

  it("Should render with default placeholder", () => {
    fileComponent = mount(File, {
      stubs
    })

    const input = fileComponent.find(".ui-debio-input__input")
    expect(input.attributes("placeholder")).toBe("Choose File")
  })

  it("Should render with custom placeholder", () => {
    fileComponent = mount(File, {
      stubs,
      propsData: { placeholder: "custom placeholder"}
    })

    const input = fileComponent.find(".ui-debio-input__input")
    expect(input.attributes("placeholder")).toBe("custom placeholder")
  })

  it("Should render with default variant", () => {
    fileComponent = mount(File, {
      stubs
    })

    const file = fileComponent.find(".ui-debio-file")
    expect(file.classes()).toContain("ui-debio-file--default")
  })

  it("Should render with small variant", () => {
    fileComponent = mount(File, {
      stubs,
      propsData: { variant: "small"}
    })

    const file = fileComponent.find(".ui-debio-file")
    expect(file.classes()).toContain("ui-debio-file--small")
  }) 

  it("Should render with large variant", () => {
    fileComponent = mount(File, {
      stubs,
      propsData: { variant: "large"}
    })

    const file = fileComponent.find(".ui-debio-file")
    expect(file.classes()).toContain("ui-debio-file--large")
  })

  it("Should render file component with button", () => {
    fileComponent = shallowMount(File, {
      stubs
    })

    expect(fileComponent.findComponent(Button).exists()).toBe(true)
  })
})
