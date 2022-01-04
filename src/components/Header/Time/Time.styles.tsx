import styled from "styled-components";

export const H1 = styled.div`
    font-size: var(--fontVeryBig);
    font-weight: bold;
    color: #e06c75;
    margin: 0;
`;

export const H2 = styled.div`
    font-size: var(--fontBig);
    color: var(--lightGray);
`;

export const Wrapper = styled.div`
    font-family: "fira sans", sans-serif;

    @media screen and (min-width: 0px) and (max-width: 500px) {
        margin-top: 10vh;
        text-align: center;
    }    
`;
