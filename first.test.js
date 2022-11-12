const calculateBonus = require("./first");
describe("Бонус < 50", () => {
  it("Бонус < 50", () => {
    expect(calculateBonus(48, 1)).toBeLessThan(50);
  });
});

describe("Бонус > 50", () => {
  it("Бонус > 50", () => {
    expect(calculateBonus(50, 1)).toBe(50);
  });
});

describe("Бонус = 50", () => {
  it("Бонус = 50", () => {
    expect(calculateBonus(48, 2)).toBe(50);
    expect(calculateBonus(48, 2)).toEqual(50);
  });
});

describe("Бонус = 0", () => {
  it("Бонус = 0", () => {
    expect(calculateBonus(0, 0)).toBe(0);
    expect(calculateBonus(0, 0)).toEqual(0);
  });
});
