import { mount } from "@vue/test-utils"
import Banner from "@/common/components/Banner"
import Card from "@/common/components/Card"
import Icon from "@/common/components/Icon"

describe("Banner Component", () => {  
  let container
  const stubs = {
    UiDebioCard: Card,
    UiDebioIcon: Icon
  }
  
  it("Should render", () => {
    container = mount(Banner, {
      stubs
    })

    expect(container.exists()).toBe(true)
  })

  it("Should render banner with custom title and subtitle", () => {
    container = mount(Banner, {
      stubs,
      propsData: {
        title: "Custom title",
        subtitle: "Custom subtitle"
      }
    })
    
    const title = container.find(".banner__title").element.innerHTML
    const subtitle = container.find(".banner__subtitle").element.innerHTML

    expect(title).toBe("Custom title")
    expect(subtitle).toBe("Custom subtitle")
  })

  it("Should render banner with particle decorations", () => {
    container = mount(Banner, {
      stubs,
      propsData: { withDecoration: true }
    })

    expect(container.classes()).toContain("banner--with-decoration")
    expect(container.find(".banner__decoration").exists()).toBe(true)
  })

  it("Should render banner with primary gradient background", () => {
    container = mount(Banner, {
      stubs,
      propsData: { gradientColor: "primary" }
    })

    expect(container.classes()).toContain("banner--with-gradient")
    expect(container.classes()).toContain("banner--gradient-primary")
  })

  it("Should render banner with secondary gradient background", () => {
    container = mount(Banner, {
      stubs,
      propsData: { gradientColor: "secondary" }
    })

    expect(container.classes()).toContain("banner--with-gradient")
    expect(container.classes()).toContain("banner--gradient-secondary")
  })

  it("Should render banner with tertiary gradient background", () => {
    container = mount(Banner, {
      stubs,
      propsData: { gradientColor: "tertiary" }
    })

    expect(container.classes()).toContain("banner--with-gradient")
    expect(container.classes()).toContain("banner--gradient-tertiary")
  })

  it("Should render banner with violet gradient background", () => {
    container = mount(Banner, {
      stubs,
      propsData: { gradientColor: "violet" }
    })

    expect(container.classes()).toContain("banner--with-gradient")
    expect(container.classes()).toContain("banner--gradient-violet")
  })

  it("Should not render banner with gradient background", () => {
    container = mount(Banner, {
      stubs,
      propsData: { gradientColor: "red" }
    })

    expect(container.classes()).not.toContain("banner--with-gradient")
  })

  it("Should render banner with illustration", () => {
    container = mount(Banner, {
      stubs,
      slots: {
        illustration: `
          <div class="test-illustration">test</div>
        `
      }
    })

    expect(container.find(".test-illustration").exists()).toBe(true)
  })

  it("Should render banner with cta", () => {
    container = mount(Banner, {
      stubs,
      slots: {
        cta: `
          <div class="test-cta">test</div>
        `
      }
    })

    expect(container.find(".test-cta").exists()).toBe(true)
  })
})
