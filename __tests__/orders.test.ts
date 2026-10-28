import { canCancel, isActive, nextStatus, timeline } from '@/utils/orders';

describe('timeline', () => {
  it('marca concluídas, a atual e as pendentes', () => {
    expect(timeline('preparing').map((s) => s.state)).toEqual([
      'done',
      'current',
      'pending',
      'pending',
    ]);
  });
});
