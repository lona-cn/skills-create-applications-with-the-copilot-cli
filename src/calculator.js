#!/usr/bin/env node

// Supported operations:
// - addition (+)
// - subtraction (-)
// - multiplication (* or x)
// - division (/)

function parseNumber(value, name) {
  const parsedValue = Number(value);

  if (!Number.isFinite(parsedValue)) {
    throw new Error(`Invalid ${name}: "${value}"`);
  }

  return parsedValue;
}

function addition(left, right) {
  return left + right;
}

function subtraction(left, right) {
  return left - right;
}

function multiplication(left, right) {
  return left * right;
}

function division(left, right) {
  if (right === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return left / right;
}

function calculate(left, operation, right) {
  switch (operation) {
    case "+":
    case "add":
    case "addition":
      return addition(left, right);
    case "-":
    case "subtract":
    case "subtraction":
      return subtraction(left, right);
    case "*":
    case "x":
    case "multiply":
    case "multiplication":
      return multiplication(left, right);
    case "/":
    case "divide":
    case "division":
      return division(left, right);
    default:
      throw new Error(
        `Unsupported operation: "${operation}". Use +, -, *, or /.`,
      );
  }
}

function runCli(argv = process.argv.slice(2)) {
  if (argv.length !== 3) {
    throw new Error("Usage: node src/calculator.js <number> <operation> <number>");
  }

  const left = parseNumber(argv[0], "left operand");
  const operation = argv[1].toLowerCase();
  const right = parseNumber(argv[2], "right operand");

  return calculate(left, operation, right);
}

if (require.main === module) {
  try {
    const result = runCli();
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
  parseNumber,
  runCli,
};
