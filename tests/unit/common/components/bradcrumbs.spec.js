import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils"
import Breadcrumbs from "@/common/components/Breadcrumbs"
import VueRouter from "vue-router"

describe("Breadcrumbs component", () => {

  const stubs = {
    RouterLink: RouterLinkStub
  }
  
  it("Should render breadcrumbs ", () => {
    const router = new VueRouter()
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    const breadcrumb = shallowMount(Breadcrumbs, {
      localVue,
      router,
      stubs
    })

    expect(breadcrumb.exists()).toBe(true)
  })

  
  it("Watcher should return array of strings", () => {
    const spy = jest.spyOn(Breadcrumbs.watch.$route, "handler")
    expect(spy).toHaveReturned
  })

  it("Should render text with link title", () => {
    const router = new VueRouter()
    const localVue = createLocalVue()
    localVue.use(VueRouter)

    let result = router.history.current.name
    if (!result) {
      result = ""
    }

    const breadcrumb = shallowMount(Breadcrumbs, {
      localVue,
      router,
      stubs
    })
    expect(breadcrumb.text()).toBe(result)
  })

})
