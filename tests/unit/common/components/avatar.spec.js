import { mount, RouterLinkStub } from "@vue/test-utils"
import Avatar from "@/common/components/Avatar"

describe("Avatar Component", () => {
  it("Should render", () => {
    const avatarComponent = mount(Avatar)

    expect(avatarComponent.element.tagName === "DIV").toBe(true)
  })

  it("Should render avatar with custom avatar image", () => {
    const avatarComponent = mount(Avatar, {
      propsData: { src: "https://picsum.photos/200" }
    })

    expect(avatarComponent.find("img").attributes("src")).toBe("https://picsum.photos/200")
  })

  it("Should render avatar with custom avatar size", () => {
    const avatarComponent = mount(Avatar, {
      propsData: { size: "90" }
    })

    expect(avatarComponent.attributes("style")).toBe("width: 90px; height: 90px;")
  })

  it("Should render default rounded avatar", () => {
    const avatarComponent = mount(Avatar, {
      propsData: { rounded: true }
    })

    expect(avatarComponent.classes("ui-debio-avatar--rounded")).toBe(true)
  })

  it("Should render rounded circle avatar", () => {
    const avatarComponent = mount(Avatar, {
      propsData: { rounded: true, roundedType: "circle" }
    })

    expect(avatarComponent.classes("ui-debio-avatar--rounded-circle")).toBe(true)
  })

  it("Should avatar with initial", () => {
    const avatarComponent = mount(Avatar, {
      propsData: { initial: "DM" }
    })

    expect(avatarComponent.find(".ui-debio-avatar__initial").exists()).toBe(true)
  })

  it("Should render avatar as a link", () => {
    const avatarComponent = mount(Avatar, {
      propsData: { to: "/" },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(avatarComponent.element.tagName === "A").toBe(true)
  })
})
