import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
   h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 2.25rem;
      margin-bottom: 2rem;
   }

   input {
      width: 100%;
      height: 4rem;
      padding: 0 1.5rem;

      background-color: var(--input-background);
      border: 1px solid var(--input-border);
      border-radius: .3rem;

      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
         color: var(--text-body);
      }

      & + input {
         margin-top: 1rem;
      }
      /* Todo input que tiver um input antes dele */
   }

   button[type="submit"] {
      width: 100%;
      height: 4rem;
      padding: 0 1.5rem;
      margin-top: 1.5rem;

      background-color: var(--green);
      border: 0;
      border-radius: .3rem;

      color: var(--shape);
      font-weight: 600;
      font-size: 1rem;

      transition: filter .2s;
      &:hover {
         filter: brightness(.9);
      }
   }
   /* pega só o button do tipo submit */
`;

export const TransactionTypeContainer = styled.div`
   margin: 1rem 0;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: .5rem;
`

interface RadioTypeProps {
   isActive: boolean;
   activeColor: 'green' | 'red';
}

const colors = {
   green: '#33CC95',
   red: '#E62E4D',
}

export const RadioType = styled.button<RadioTypeProps>`
   height: 4rem;
   border: 1px solid var(--input-border);
   border-radius: .3rem;
   background-color: ${(props) => props.isActive 
   ? transparentize(.9, colors[props.activeColor])
   : 'transparent'};

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;

   transition: all .2s;

   &:hover {
      border-color: ${darken(.1, '#d7d7d7')};
   }

   img {
      width: 1.5rem;
   }

   span {
      color: var(--text-title);
      font-weight: 400;
      font-size: 1rem;
   }
`