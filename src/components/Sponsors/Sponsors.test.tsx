import {render, screen} from "@testing-library/react"
import Sponsors from "components/Sponsors"
import {mockSponsors} from "test-utils/mocks"
import {expect, test} from "vitest"

test.concurrent("shows sponsors page", () => {
    render(<Sponsors sponsors={mockSponsors} />)
    expect(screen.getByText("💜 thank you"))

    Object.entries(mockSponsors).forEach(([tier]) => {
        expect(screen.getByText(tier))
    })
})

test.concurrent("shows sponsor tier", () => {
    render(<Sponsors sponsors={mockSponsors} />)

    Object.entries(mockSponsors).forEach(([tier, sponsors]) => {
        expect(screen.getByText(tier))

        sponsors.forEach(sponsor => {
            expect(
                screen.getByAltText(sponsor.username).parentElement,
            ).toHaveAttribute("href", sponsor.profile)
        })
    })
})

test.concurrent("shows empty sponsor tier", () => {
    mockSponsors["one-time"] = []

    render(<Sponsors sponsors={mockSponsors} />)

    expect(screen.getByText("be the first")).toHaveAttribute(
        "href",
        "https://bradgarropy.com/sponsor",
    )
})
