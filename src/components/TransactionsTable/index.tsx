import { Container } from "./styles";

export function TransactionTable() {
   return (
      <Container>
         <table>
            <thead>
               <tr>
                  <th>Título</th>
                  <th>Preço</th>
                  <th>Categoria</th>
                  <th>Data</th>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <td>Desenvolvimento website</td>
                  <td className="income">R$12.000,00</td>
                  <td>Desenvolvimento</td>
                  <td>11/03/2022</td>
               </tr>
               <tr>
                  <td>Aluguel</td>
                  <td className="outcome">-R$2.000,00</td>
                  <td>Casa</td>
                  <td>11/03/2022</td>
               </tr>
               <tr>
                  <td>Desenvolvimento website</td>
                  <td className="income">R$1.000,00</td>
                  <td>Desenvolvimento</td>
                  <td>11/03/2022</td>
               </tr>
            </tbody>
         </table>
      </Container>
   )
}