import { formatMoney, parseMoney, roundMoney, toInputMoney } from '@/utils/money';

const nbsp = / /g;

describe('parseMoney', () => {
  it('aceita vírgula decimal', () => {
    expect(parseMoney('10,5')).toBe(10.5);
    expect(parseMoney('0,99')).toBe(0.99);
  });

  it('aceita ponto como separador de milhar', () => {
    expect(parseMoney('1.234,56')).toBe(1234.56);
    expect(parseMoney('1.234')).toBe(1234);
  });

  it('retorna NaN para texto sem números', () => {
    expect(parseMoney('')).toBeNaN();
    expect(parseMoney('abc')).toBeNaN();
  });
});
