import styled from "styled-components";
import artwork from "../../misc/artwork/gengar.png";

export const Content = styled.div`
  flex: 1;
  background: url(${artwork});
  margin-right: 8rem;
  background-position: right bottom;
  border: solid 3px var(--lightGray);

  @media screen and (min-width: 0px) and (max-width: 500px) {
      display: none; 
  }
`
