import React from "react"
import PropTypes from "prop-types"
import "../scss/PostBody.scss"
import "../scss/PrismFunky.scss"

const PostBody = ({content}) => {
    return (
        <div className="post-body">
            <div
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
        </div>
    )
}

PostBody.propTypes = {
    content: PropTypes.string.isRequired,
}

export default PostBody