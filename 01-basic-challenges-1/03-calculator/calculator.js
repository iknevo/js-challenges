function calculator(a, b, op) {
  let result;
  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      throw new Error("Invalid operator");
  }
  return result;
}

module.exports = calculator;
