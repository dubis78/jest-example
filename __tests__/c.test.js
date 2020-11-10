const dataToString = require('../src/c');

it("c test", () => {
  expect(2 + 2).toBe(4);
});

test('string', ()=>{  //description sobre la prueba a realizar
  const {toText}=dataToString;
  expect(toText(5+4)).toBe('9');    //toBe es el resultado esperado para aprobar el test
});

it("to text", () => {
  expect(dataToString.toText(123)).toBe('123');
});
