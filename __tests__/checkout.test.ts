import { makeCheckoutSchema } from '@/schemas/checkout';

const valid = {
  street: 'Rua das Flores',
  number: '120',
  neighborhood: 'Centro',
  complement: '',
  payment: 'pix' as const,
  changeFor: '',
};

describe('makeCheckoutSchema', () => {
  const schema = makeCheckoutSchema(46.3);

  it('aceita um pedido completo', () => {
    expect(schema.safeParse(valid).success).toBe(true);
  });
});
