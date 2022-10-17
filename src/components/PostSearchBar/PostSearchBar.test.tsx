import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PostSearchBar from "components/PostSearchBar"
import * as nextRouter from "next/router"
import {mockPosts, mockPostsFrontmatter} from "test-utils/mocks"
import {beforeEach, describe, expect, test, vi} from "vitest"

const onSearchMock = vi.fn()
const mockPlaceholder = "search blog"
const mockQuery = "fourth"

const mockUseRouter = vi.spyOn(nextRouter, "useRouter")
const mockPush = vi.fn()

describe("search bar", () => {
    beforeEach(() => {
        mockUseRouter.mockReturnValue({
            asPath: "",
            back: vi.fn(),
            basePath: "",
            beforePopState: vi.fn(),
            events: {
                on: vi.fn(),
                off: vi.fn(),
                emit: vi.fn(),
            },
            isFallback: false,
            isLocaleDomain: false,
            isPreview: false,
            isReady: true,
            pathname: "/blog",
            prefetch: vi.fn(),
            push: mockPush,
            replace: vi.fn(),
            reload: vi.fn(),
            route: "",
            query: {},
        })

        render(
            <PostSearchBar
                onSearch={onSearchMock}
                posts={mockPostsFrontmatter}
            />,
        )
    })

    test("shows search bar", () => {
        expect(screen.getByPlaceholderText(mockPlaceholder))
    })

    test("searches", async () => {
        await userEvent.type(
            screen.getByPlaceholderText(mockPlaceholder),
            mockQuery,
        )

        expect(screen.getByPlaceholderText(mockPlaceholder)).toHaveDisplayValue(
            mockQuery,
        )

        expect(onSearchMock).toHaveBeenCalledTimes(7)

        expect(onSearchMock).toHaveBeenLastCalledWith([
            mockPosts[3].frontmatter,
        ])

        expect(mockPush).toHaveBeenCalledTimes(7)

        expect(mockPush).toHaveBeenLastCalledWith(
            `/blog?search=${mockQuery}`,
            undefined,
            {
                shallow: true,
            },
        )
    })
})

describe("search bar with input", () => {
    beforeEach(() => {
        mockUseRouter.mockReturnValue({
            asPath: "",
            back: vi.fn(),
            basePath: "",
            beforePopState: vi.fn(),
            events: {
                on: vi.fn(),
                off: vi.fn(),
                emit: vi.fn(),
            },
            isFallback: false,
            isLocaleDomain: false,
            isPreview: false,
            isReady: true,
            pathname: "/blog",
            prefetch: vi.fn(),
            push: mockPush,
            replace: vi.fn(),
            reload: vi.fn(),
            route: "",
            query: {
                search: mockQuery,
            },
        })

        render(
            <PostSearchBar
                onSearch={onSearchMock}
                posts={mockPostsFrontmatter}
            />,
        )
    })

    test("shows search bar with input", () => {
        expect(screen.getByPlaceholderText(mockPlaceholder)).toHaveDisplayValue(
            mockQuery,
        )
    })
})
