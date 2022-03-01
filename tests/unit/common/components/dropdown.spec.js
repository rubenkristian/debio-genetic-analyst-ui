import { createLocalVue, mount } from "@vue/test-utils"
import Vue from "vue"
import Vuetify from "vuetify"
import Dropdown from "@/common/components/Dropdown"
import Input from "@/common/components/Input"

Vue.use(Vuetify)

const localVue = createLocalVue()

describe("Dropdown Component", () => {
  const stubs = { UiDebioInput: Input }
  const items = [
    {
      name: "a",
      value: 1
    },
    {
      name: "b",
      value: 2
    },
    {
      name: "c",
      value: 3
    }
  ]
  let container
  let vuetify
  
  beforeEach(() => {
    vuetify = new Vuetify()

    const nodeCrypto = require("crypto")

    global.crypto = {
      getRandomValues: (buffer) => { return nodeCrypto.randomFillSync(buffer) }
    }
  })
  
  it("Should render", () => {
    container = mount(Dropdown, {
      localVue,
      vuetify,
      stubs
    })

    expect(container.exists()).toBe(true)
  })

  it("Should render dropdown with small variant size", () => {
    container = mount(Dropdown, {
      localVue,
      vuetify,
      stubs,
      propsData: { variant: "small" }
    })

    expect(container.classes()).toContain("ui-debio-dropdown--small")
  })

  it("Should render dropdown with large variant size", () => {
    container = mount(Dropdown, {
      localVue,
      vuetify,
      stubs,
      propsData: { variant: "large" }
    })

    expect(container.classes()).toContain("ui-debio-dropdown--large")
  })

  it("Should validation dropdown size variant", () => {
    container = mount(Dropdown, {
      localVue,
      vuetify,
      stubs,
      propsData: { variant: "unknownSize" }
    })

    const error = () => {
      throw new TypeError("[Vue warn]")
    }

    expect(error).toThrow(TypeError)
  })

  it("Should render dropdown with item options", () => {
    container = mount(Dropdown, {
      localVue,
      vuetify,
      stubs,
      propsData: {
        items: ["a", "b", "c"]
      }
    })
    
    const itemsLength = container.findAll(".ui-debio-dropdown__item").length

    expect(itemsLength).toBe(3)
  })

  it("Should render dropdown with array of objects item options", () => {
    container = mount(Dropdown, {
      localVue,
      vuetify,
      stubs,
      propsData: { items }
    })
    
    const itemsLength = container.findAll(".ui-debio-dropdown__item").length

    expect(itemsLength).toBe(3)
  })

  it("Should open dropdown item options", async () => {
    container = mount(Dropdown, {
      localVue,
      vuetify,
      stubs,
      propsData: { items }
    })
    
    await container.find(".ui-debio-dropdown__wrapper").trigger("click")

    expect(container.classes()).toContain("ui-debio-dropdown--active")
    expect(container.find(".ui-debio-dropdown__selects--show").exists()).toBe(true)
  })

  it("Should select item option", async () => {
    container = mount(Dropdown, {
      localVue,
      vuetify,
      stubs,
      propsData: { items }
    })

    const item = container.find(".ui-debio-dropdown__item")
    await item.trigger("click")

    expect(item.classes()).toContain("ui-debio-dropdown__item--selected")
  })

  it("Should find match item", async () => {
    container = mount(Dropdown, {
      localVue,
      vuetify,
      stubs,
      propsData: { items, itemText: "name" },
      data: () => ({
        searchQuery: "c"
      })
    })

    await container.find(".ui-debio-dropdown__wrapper").trigger("click")
    const matchText = container.find(".ui-debio-dropdown__item").element.innerHTML

    expect(matchText.replace(/<\/?span[^>]*>/g, "")).toBe("c")
    expect(container.findAll(".ui-debio-dropdown__item").length).toBe(1)
  })
})
