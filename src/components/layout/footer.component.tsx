import React, { FunctionComponent } from "react";
import { CenteredFooter } from "./footer.styles";

export const Footer: FunctionComponent = () => {
    return (
        <CenteredFooter>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            {` `}
            by NTU DevSoc
        </CenteredFooter>
    );
};