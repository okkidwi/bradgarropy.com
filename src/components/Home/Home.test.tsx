import {render, screen} from "@testing-library/react"
import Home from "components/Home"
import {
    mockPodcast,
    mockPostsFrontmatter,
    mockProjects,
    mockVideos,
} from "test-utils/mocks"

test("shows home page", () => {
    render(
        <Home
            latestPosts={mockPostsFrontmatter}
            latestVideos={mockVideos}
            featuredProjects={mockProjects}
            podcast={mockPodcast}
        />,
    )

    expect(screen.getByText("i'm brad garropy"))
    expect(screen.getByText("blog"))
    expect(screen.getByText("videos"))
    expect(screen.getByText("projects"))
    expect(screen.getByText("podcast"))
})
