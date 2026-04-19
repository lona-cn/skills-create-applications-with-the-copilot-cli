const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
  runCli,
} = require("../calculator");

describe("calculator basic operations", () => {
  test("addition returns the sum of two numbers", () => {
    expect(addition(2, 3)).toBe(5);
  });

  test("subtraction returns the difference of two numbers", () => {
    expect(subtraction(10, 4)).toBe(6);
  });

  test("multiplication returns the product of two numbers", () => {
    expect(multiplication(45, 2)).toBe(90);
  });

  test("division returns the quotient of two numbers", () => {
    expect(division(20, 5)).toBe(4);
  });

  test("division throws for division by zero", () => {
    expect(() => division(20, 0)).toThrow("Division by zero is not allowed.");
  });
});

describe("calculator extended operations", () => {
  test("modulo returns the remainder for 5 % 2", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("power returns the value for 2 ^ 3", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("square root returns the value for √16", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("modulo throws for modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed.");
  });

  test("square root throws for negative numbers", () => {
    expect(() => squareRoot(-16)).toThrow(
      "Square root is not defined for negative numbers.",
    );
  });
});

describe("calculate", () => {
  test("supports modulo aliases", () => {
    expect(calculate(5, "%", 2)).toBe(1);
    expect(calculate(5, "modulo", 2)).toBe(1);
  });

  test("supports power aliases", () => {
    expect(calculate(2, "^", 3)).toBe(8);
    expect(calculate(2, "power", 3)).toBe(8);
  });

  test("supports square root aliases", () => {
    expect(calculate(16, "sqrt")).toBe(4);
    expect(calculate(16, "√")).toBe(4);
  });
});

describe("runCli", () => {
  test("runs modulo from CLI arguments", () => {
    expect(runCli(["5", "%", "2"])).toBe(1);
  });

  test("runs power from CLI arguments", () => {
    expect(runCli(["2", "^", "3"])).toBe(8);
  });

  test("runs square root from CLI arguments", () => {
    expect(runCli(["√", "16"])).toBe(4);
  });
});
