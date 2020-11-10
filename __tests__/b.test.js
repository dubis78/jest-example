const multi = require('../src/b');

describe("pruebas para multiplicar", () => {
  it("2 * 2 is 4", () => {
    expect(2 + 2).toBe(4);
  });

  it("2 * (-2) is -4", () => {
    expect(multi.multiple(2,-2)).toBe(-4);
  });

  it("multiple test", () => {
    expect(multi.multiple(2, 3)).toBe(6);
  });
});
