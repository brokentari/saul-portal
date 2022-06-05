import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 0px) and (max-width: 500px) {
        flex-direction: column;
    }
`;
