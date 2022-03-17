import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { api } from '../../services/api'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/incomes.svg'
import outcomeImg from '../../assets/outcomes.svg'

import { Container, RadioType, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function NewTransactionModal ({ isOpen, onRequestClose }:NewTransactionModalProps) {
   const [title, setTitle] = useState('')
   const [value, setValue] = useState(0)
   const [transactionType, setTransactionType] = useState('deposit')
   const [category, setCategory] = useState('')
   
   function handleCreateNewTransaction (event: FormEvent) {
      event.preventDefault();

      const data = ({
         title,
         value,
         transactionType,
         category,
      })

      api.post('/transactions', data)
   }

   return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
         <button 
            type='button' 
            onClick={onRequestClose}
            className='react-modal-close'
         >
            <img src={closeImg} alt="fechar modal" />
         </button>
         <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input 
               placeholder='Título' 
               value={title}
               onChange={event => setTitle(event.target.value)}
            />
            <input 
               type='number'
               placeholder='Preço' 
               value={value}
               onChange={event => setValue(Number(event.target.value))}
            />

            <TransactionTypeContainer>
               <RadioType
                  type='button'
                  onClick={() => {setTransactionType('deposit')}}
                  isActive={transactionType === 'deposit'}
                  activeColor='green'
               >
                  <img src={incomeImg} alt="Entrada" />
                  <span>Entrada</span>
               </RadioType>
               <RadioType
                  type='button'
                  onClick={() => {setTransactionType('withdraw')}}
                  isActive={transactionType === 'withdraw'}
                  activeColor='red'
               >
                  <img src={outcomeImg} alt="Saída" />
                  <span>Saída</span>
               </RadioType>
            </TransactionTypeContainer>

            <input 
               placeholder='Categoria' 
               value={category}
               onChange={event => setCategory(event.target.value)}
            />
            <button type="submit">
               Cadastrar
            </button>
         </Container>
      </Modal>
   )
}