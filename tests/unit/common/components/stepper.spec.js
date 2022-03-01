import { mount, createLocalVue } from "@vue/test-utils"
import Stepper from "@/common/components/Stepper"


const localVue = createLocalVue()
let container

describe("Stepper Component", () => {
  
  let items =  [
    {
      number: 1,
      title: "title 1",
      active: true
    }
  ]

  it("Should render a stepper component", () => {
    mount(Stepper)
  })

  it("Should render a stepper with property items with type array", () => {
    container = mount(Stepper)
    expect(container.exists()).toBe(true)
    expect(Array.isArray(container.props().items)).toBe(true)
  })

  it("Should render a stepper with customize number, items, and active status", () => {
    container = mount(Stepper, {
      localVue,
      propsData: { items }
    })

    expect(container.props().items[0].number).toBe(items[0].number)
    expect(container.props().items[0].title).toBe(items[0].title)
    expect(container.props().items[0].active).toBe(items[0].active)

  })

  it("Should render a stepper with property withLineIndicator with default value false", () => {
    container = mount(Stepper)
    expect(container.props().withLineIndicator).toBe(false)
  })

})

