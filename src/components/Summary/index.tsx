import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";
import incomeImg from "../../assets/incomes.svg"
import outcomeImg from "../../assets/outcomes.svg"
import totalImg from "../../assets/total.svg"

export function Summary() {
   const transactions = useContext(TransactionsContext);

   console.log(transactions)

   return (
      <Container>
         <div>
            <header>
               <p>Entradas</p>
               <img src={incomeImg} alt="" />
            </header>
            <strong>R$17.400,00</strong>
         </div>
         <div>
            <header>
               <p>Saídas</p>
               <img src={outcomeImg} alt="" />
            </header>
            <strong>R$1.259,00</strong>
         </div>
         <div className="highlight-background">
            <header>
               <p>Total</p>
               <img src={totalImg} alt="" />
            </header>
            <strong>R$16.141,00</strong>
         </div>
      </Container>
   )
}