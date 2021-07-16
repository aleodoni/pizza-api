import pizzas from '../data/pizzas.json';

function getPizzas(pizzaId?: number | undefined) {
  if (!pizzaId) {
    return pizzas;
  }

  const pizza = pizzas.find(pizza => {
    return pizza.id == pizzaId;
  });

  if (pizza) {
    return pizza;
  }

  throw new Error('The pizza you requested was not found');
}

export = getPizzas;
