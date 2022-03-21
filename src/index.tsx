import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Exemplo 1',
          value: 100,
          transactionType: 'deposit',
          category: 'Casa',
          createdAt: new Date('2022-02-20 02:00:00')
        },
        {
          id: 2,
          title: 'Exemplo 2',
          value: 50,
          transactionType: 'withdraw',
          category: 'Comida',
          createdAt: new Date('2022-04-20 02:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', {
        ...data,
        createdAt: new Date(),
      })
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
