import styled from "styled-components";

export const Container = styled.header`
   background-color: var(--blue);
`
export const Content = styled.div`
   max-width: 1120px;
   margin: 0 auto;
   padding: 2rem 1rem 8.25rem;

   display: flex;
   align-items: center;
   justify-content: space-between;

   button {
      border: 0;
      font-size: 1rem;
      padding: .75rem 2rem;
      height: 3rem;
      color: var(--shape);
      background-color: var(--blue-light);
      border-radius: .3rem;

      transition: filter .2s;
      &:hover {
         filter: brightness(.9);
      }
   }
`