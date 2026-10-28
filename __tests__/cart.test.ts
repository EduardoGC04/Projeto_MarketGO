import type { Order, Product, Store } from '@/types';
import {
  EMPTY_CART,
  MAX_QUANTITY,
  addToCart,
  cartTotals,
  isValidCart,
  itemCount,
  missingForMinimum,
  quantityOf,
  removeItem,
  reorderCart,
  replaceCart,
  setQuantity,
} from '@/utils/cart';

const mercado = { id: 's1', name: 'Mercado', delivery_fee: 5.9, min_order: 20 };
const padaria = { id: 's2', name: 'Padaria', delivery_fee: 3.5, min_order: 10 };
const leite = { id: 'p1', name: 'Leite', emoji: '🥛', price: 5.25 };
const arroz = { id: 'p2', name: 'Arroz', emoji: '🍚', price: 29.9 };
const pao = { id: 'p3', name: 'Pão', emoji: '🥖', price: 4.8 };

describe('addToCart', () => {
  it('cria o carrinho da loja e soma a quantidade do mesmo produto', () => {
    let { cart } = addToCart(EMPTY_CART, mercado, leite, 2);
    ({ cart } = addToCart(cart, mercado, leite, 3));
    expect(cart.storeId).toBe('s1');
    expect(cart.items).toHaveLength(1);
    expect(quantityOf(cart, 'p1')).toBe(5);
  });

  it('avisa o conflito ao misturar lojas e não altera o carrinho', () => {
    const { cart } = addToCart(EMPTY_CART, mercado, leite);
    const result = addToCart(cart, padaria, pao);
    expect(result.conflict).toBe(true);
    expect(result.cart).toBe(cart);
  });

  it('não permite passar do limite de 20 por produto', () => {
    const { cart } = addToCart(EMPTY_CART, mercado, leite, 18);
    expect(quantityOf(addToCart(cart, mercado, leite, 10).cart, 'p1')).toBe(MAX_QUANTITY);
  });
});
