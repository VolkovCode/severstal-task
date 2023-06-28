import {Link, LinkProps} from "react-router-dom";
import {ReactNode} from "react";

interface AppLinkProps extends LinkProps {
    children?: ReactNode;
}

export const SidebarItem = (props) => {
    const {
        to,
        children
    } = props

    return (
        <Link to={to}>
            {children}
        </Link>
    )
}