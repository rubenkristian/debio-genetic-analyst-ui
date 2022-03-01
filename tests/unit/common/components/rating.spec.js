import { shallowMount, mount } from "@vue/test-utils"
import Rating from "@/common/components/Rating"
import Icon from "@/common/components/Icon"

describe("Rating Component", () => {
  const stubs = { UiDebioIcon: Icon }
  let container
  
  it("Should render", () => {
    container = mount(Rating)

    expect(container.exists()).toBe(true)
  })

  it("Should render without reviewers count", () => {
    container = mount(Rating, {
      propsData: {
        withReviewers: false
      }
    })

    const reviewersLabel = container.find(".ui-debio-rating__label")

    expect(reviewersLabel.exists()).toBe(false)
  })

  it("Should render values correctly", () => {
    const rating = 4.2
    const computeRating = `${rating * 20}%`

    container = mount(Rating, {
      propsData: { rating }
    })

    const stars = container.find(".ui-debio-rating__value")

    expect(stars.element.getAttribute("width")).toBe(computeRating)
  })

  it("Should render size correctly", () => {
    container = mount(Rating, {
      propsData: { size: 100 }
    })

    const svg = container.find("svg")

    expect(svg.element.getAttribute("height")).toBe("100")
  })

  it("Should render interactive star", () => {
    container = mount(Rating, {
      stubs,
      propsData: { interactive: true }
    })

    const emptyStar = container.findAll(".emptyStar")

    expect(emptyStar.exists()).toBe(true)
    expect(emptyStar.length).toBe(5)
  })

  it("Should fill value correctly", async() => {
    container = shallowMount(Rating, {
      propsData: { interactive: true }
    })

    const initialStars = container.findAll(".emptyStar")
    await initialStars.at(2).trigger("click")

    const fillStars = container.findAll(".fillStar")
    const emptyStars = container.findAll(".emptyStar")
    
    expect(emptyStars.length).toBe(2)
    expect(fillStars.length).toBe(3)
  })
})
