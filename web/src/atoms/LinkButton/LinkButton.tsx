import React, { FunctionComponent } from "react"
import { Link, Router } from "react-router-dom"
import "./LinkButton.css"

type Props = {
    linkTarget: string,
    style: string,
    message: string
};

const LinkButton : FunctionComponent<Props> = (Props) => {
    return (
        <li><Link to={Props.linkTarget} ><button className={Props.style}>{Props.message}</button></Link></li>
    )
};

export default LinkButton;