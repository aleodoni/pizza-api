import express from 'express';
import pizzaRouter from './routes/pizzas.routes';
import orderRouter from './routes/orders.routes';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(pizzaRouter);
app.use(orderRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Express Lambda Pizza API (TypeScript IV)');
});

export = app;
