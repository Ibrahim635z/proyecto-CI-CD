const { sumar } = require('../src/math');

test('Prueba de suma', () => {
  expect(sumar(2, 3)).toBe(5);
});