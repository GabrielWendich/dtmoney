import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";
import incomeImg from "../../assets/incomes.svg"
import outcomeImg from "../../assets/outcomes.svg"
import totalImg from "../../assets/total.svg"

export function Summary() {
   const { transactions } = useTransactions();

   const summary = transactions.reduce((acc, transaction) => {
      if (transaction.transactionType === 'deposit') {
         acc.deposits += transaction.value;
         acc.total += transaction.value;
      } else {
         acc.withdraws += transaction.value;
         acc.total -= transaction.value;
      }

      return acc;
   }, {
      deposits: 0,
      withdraws: 0,
      total: 0,
   })

   return (
      <Container>
         <div>
            <header>
               <p>Entradas</p>
               <img src={incomeImg} alt="" />
            </header>
            <strong>
               {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
               }).format(summary.deposits)}
            </strong>
         </div>
         <div>
            <header>
               <p>Saídas</p>
               <img src={outcomeImg} alt="" />
            </header>
            <strong>
               -
               {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
               }).format(summary.withdraws)}   
            </strong>
         </div>
         <div className="highlight-background">
            <header>
               <p>Total</p>
               <img src={totalImg} alt="" />
            </header>
            <strong>
               {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
               }).format(summary.total)}   
            </strong>
         </div>
      </Container>
   )
}