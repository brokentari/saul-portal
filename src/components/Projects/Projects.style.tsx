import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 5em;
`

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 5em;
  
`
export const ProjectDescription = styled.li`
    font-size: large;

    &:not(:last-child) {
      margin-bottom: 1em;
    }
`