import Link from "@bradgarropy/next-link"
import classnames from "classnames"
import {FC} from "react"

import styles from "./LinkButton.module.css"

type LinkButtonProps = {
    to: string
    reverse?: boolean
    disabled?: boolean
}

const LinkButton: FC<LinkButtonProps> = ({
    to,
    reverse = false,
    disabled = false,
    ...props
}) => {
    const classes = classnames(styles.linkButton, {
        [styles.reverse]: reverse,
        [styles.disabled]: disabled,
    })

    if (disabled) {
        return <span className={classes}>{props.children}</span>
    }

    return (
        <Link to={to} className={classes}>
            {props.children}
        </Link>
    )
}

export default LinkButton
