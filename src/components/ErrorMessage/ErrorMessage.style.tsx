import styled from "styled-components";
import artwork from "../../misc/artwork/pikachu.png";

export const Wrapper = styled.div`
`;

export const Content = styled.div`
  background: url(${artwork});
  height: 50vh;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
`

export const Message = styled.div`
    display: block;
    color: white;
    margin-top: -3rem;   
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: center;
`