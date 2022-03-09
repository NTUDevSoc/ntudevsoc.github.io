import React, { FunctionComponent } from "react"
import { Logo } from "./devsoc-logo-styles"

import LogoPng from "../../assets/devsoc-logo.png"

export const DevSocLogo: FunctionComponent = () => {
    return (
        <Logo src={LogoPng} />
    )
}