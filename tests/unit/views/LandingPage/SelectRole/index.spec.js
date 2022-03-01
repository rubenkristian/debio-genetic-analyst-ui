import { mount, config } from "@vue/test-utils"
import SelectRole from "@/views/LandingPage/SelectRole"

config.stubs["router-link"] = { template: "<div></div>" }
config.stubs["ui-debio-icon"] = { template: "<div></div>" }

describe("Select Role Page", () => {
  it("Should render", () => {
    mount(SelectRole)
  })
})
