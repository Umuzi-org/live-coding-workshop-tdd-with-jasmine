function coolFunc(a, b, c, expensiveFunc) {
  stuff();
  b = expensiveFunc(a);
  other_stuff();
}

function testCool() {
  mockExpensiveFunc = function() {
    return True;
  };
  coolFunc(a, b, c, mockExpensiveFunc);
}
