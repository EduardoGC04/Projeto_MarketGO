import type { Product, Store } from '@/types';
import { filterStores, formatEta, groupProducts, sortStores } from '@/utils/catalog';

const store = (partial: Partial<Store> & Pick<Store, 'id' | 'name'>): Store => ({
  category: 'Mercado',
  emoji: '🛒',
  description: '',
  rating: 4.5,
  delivery_fee: 5,
  eta_min: 30,
  eta_max: 45,
  min_order: 0,
  is_open: true,
  ...partial,
});

const stores = [
  store({ id: '1', name: 'Mercado Bom Preço', rating: 4.7 }),
  store({ id: '2', name: 'Padaria Pão Quente', category: 'Padaria', rating: 4.8 }),
];

describe('filterStores', () => {
  it('busca sem acento e sem diferença de maiúsculas', () => {
    expect(filterStores(stores, 'pao', null).map((s) => s.id)).toEqual(['2']);
  });
});
