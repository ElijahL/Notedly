import styled from "styled-components";

const ButtonAsLink = styled.button`
    background: none;
    color: #0077cc;
    border: none;
    padding: 0;
    font: inherit;
    text-decoration: underline;
    cursor: pointer;

    :hover,
    :active {
        const: #004499;
    }
`;

export default ButtonAsLink;