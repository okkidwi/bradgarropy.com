import {Link} from "gatsby"
import {FC} from "react"
import {Post} from "types/post"

import * as styles from "./PostTitle.module.css"

type PostTitleProps = {
    title: Post["frontmatter"]["title"]
    slug?: Post["frontmatter"]["slug"]
}

const PostTitle: FC<PostTitleProps> = ({title, slug}) => {
    return (
        <div className={styles.postTitle}>
            <h1>{slug ? <Link to={`/blog/${slug}`}>{title}</Link> : title}</h1>
        </div>
    )
}

export default PostTitle