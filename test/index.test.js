import { operation, foo } from '../dist/index.esm';

const operat = new operation(1);
test('adds 1 + 2 to equal 3', () => {
  expect(operat.add(2).num).toBe(3);
});

describe('number test', () => {
  it('1 is true', () => {
    expect(1).toBeTruthy();
  });
  test('2 is true', () => {
    expect(2).toBeTruthy();
  });
});
