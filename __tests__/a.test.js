const sum = require('../src/a');

describe("pruebas para suma", () => {  //describe es opcional

  test('1 + 2 is 3', ()=>{  //description sobre la prueba a realizar
    expect(sum(1,2)).toBe(3);    //toBe es el resultado esperado para aprobar el test
  });

  it("11 + 2 is 13", () => {
    expect(sum(11,2)).toBe(13)
  });
  //expect(sum.add(2, 2)).toBe(4);

  test('1 + (-22) is -21', ()=>{  //description sobre la prueba a realizar
    expect(sum(1,-22)).toBe(-21);    //toBe es el resultado esperado para aprobar el test
  });

});


