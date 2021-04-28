import Link from "@bradgarropy/gatsby-link"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {useLatestVideos} from "hooks"
import styled from "styled-components"

const LatestVideosWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-items: start;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const Thumbnail = styled.div`
    .thumbnail-container {
        overflow: visible;
    }

    .thumbnail {
        box-sizing: border-box;
        border-radius: 0.3rem;
        border: 3px solid var(--text);
        background-color: var(--text);
        box-shadow: 3px 3px 0 var(--text);
    }

    .thumbnail:hover {
        box-shadow: none;
    }
`

const LatestVideos = () => {
    const latestVideos = useLatestVideos()

    return (
        <LatestVideosWrapper>
            {latestVideos.map(latestVideo => {
                const thumbnail = getImage(latestVideo.localThumbnail)

                return (
                    <Link
                        key={latestVideo.videoId}
                        to={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
                    >
                        <Thumbnail data-testid={latestVideo.videoId}>
                            <GatsbyImage
                                image={thumbnail}
                                alt={latestVideo.title}
                                className="thumbnail-container"
                                imgClassName="thumbnail"
                            />
                        </Thumbnail>
                    </Link>
                )
            })}
        </LatestVideosWrapper>
    )
}

export default LatestVideos
