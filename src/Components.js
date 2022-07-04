import styled, {css} from "styled-components";

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    color: #7d7d7d;
    cursor: default;
    ${props => props.theme === "dark" && css`
        color: #1d1d1f;

        &:hover {
            color: #7d7d7d;
        }
    `}
`;