import { mount } from "@vue/test-utils"
import Icon from "@/common/components/Icon"
import { boxIcon } from "@/common/icons"


describe("Icon Component", () => {
  it("Should render", () => {
    const iconComponent = mount(Icon)

    expect(iconComponent.exists()).toBe(true)
  })

  it("Should render with SVG icon", () => {
    const wrapper = mount(Icon, {
      propsData: { icon: boxIcon }
    })

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.exists()).toBe(true)
  })

  it("Should render with custom size", () => {
    const wrapper = mount(Icon, {
      propsData: { size: "50"}
    })

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("width")).toBe("50")
    expect(iconComponent.attributes("height")).toBe("50")
  })

  it("Should render with default size", () => {
    const wrapper = mount(Icon)

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("width")).toBe("40")
    expect(iconComponent.attributes("height")).toBe("40")
  })

  it("Should render with custom width", () => {
    const wrapper = mount(Icon, {
      propsData: { width: "50"}
    })

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("width")).toBe("50")
  })

  it("Should render with custom height", () => {
    const wrapper = mount(Icon, {
      propsData: { height: "50"}
    })

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("height")).toBe("50")
  })

  it("Should render with default view-box", () => {
    const wrapper = mount(Icon)

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("viewBox")).toBe("0 0 40 40")
  })

  it("Should render with custom view-box", () => {
    const wrapper = mount(Icon, {
      propsData: {viewBox: "0 0 50 50"}
    })

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("viewBox")).toBe("0 0 50 50")
  })

  it("Should render with stroked icon", () => {
    const wrapper = mount(Icon, {
      propsData: { stroke: true }
    })

    const iconComponent = wrapper.find("svg")
    const stroke = iconComponent.find("stroke").selector
    expect(stroke).toContain("stroke")
  })
  
  it("Should render with default stroke width", () => {
    const wrapper = mount(Icon, {
      propsData: { stroke: true}
    })

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("stroke-width")).toBe("2")
  })
  
  it("Should render with custom stroke", () => {
    const wrapper = mount(Icon, {
      propsData: { strokeWidth: "5", stroke: true}
    })

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("stroke-width")).toBe("5")
  })

  it("Should render with icon with color fill", () => {
    const wrapper = mount(Icon, {
      propsData: { color: "#C400A5", fill: true}
    })

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("fill")).toBe("currentColor")
  })

  it("Should render with icon with custom color", () => {
    const wrapper = mount(Icon, {
      propsData: { color: "#C400A5", fill: true}
    })

    const iconComponent = wrapper.find("svg")
    expect(iconComponent.attributes("style")).toBe("color: rgb(196, 0, 165);")
  })

})
