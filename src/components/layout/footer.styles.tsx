import styled from "styled-components";
import theme from "../../theme.json"

export const CenteredFooter = styled.footer({
    background: theme.colours.primary,
    color: theme.colours.secondary,
    display: "block",
    textAlign: "center",
    padding: `${theme.spacing.default} 0`
})