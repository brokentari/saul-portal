import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;

    @media screen and (min-width: 0px) and (max-width: 500px) {
        margin-top: 5rem;
    }
`;

export const Quote = styled.div`
    font-size: var(--fontMed);
    font-style: italic;
    color: var(--lightGray);

    @media screen and (min-width: 0px) and (max-width: 500px) {
        padding-left: 15%;
        padding-right: 15%;
    }
`;

export const Author = styled.div`
    font-size: var(--fontSmall);
    color: var(--darkGray);

    @media screen and (min-width: 0px) and (max-width: 500px) {
        padding-left: 15%;
    }
`;
