import {render, screen} from "@testing-library/react"
import Post from "components/Post"
import {useMeta} from "hooks"
import {mockMeta, mockPost} from "test-utils/mocks"
import {expect, Mock, test, vi} from "vitest"

vi.mock("hooks/useMeta")

const mockUseMeta = useMeta as Mock
mockUseMeta.mockReturnValue(mockMeta)

test.concurrent("shows post header", () => {
    render(<Post post={mockPost} />)

    expect(screen.getByText("January 1, 2021", {exact: false}))
    expect(screen.getByText(`#${mockPost.frontmatter.topic}`))
    expect(screen.getByText(mockPost.frontmatter.title))
})

test.concurrent("shows post body", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("This is the first test post."))
})

test.concurrent("shows post footer", () => {
    render(<Post post={mockPost} />)
    expect(screen.getByText("💬 discuss on twitter"))
    expect(screen.getByText("💻 edit on github"))
})
