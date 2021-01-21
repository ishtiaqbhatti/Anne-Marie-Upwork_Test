// Function to check if the input string is a valid parenthesis
checkIfValidParenthesis = (data) => {
  // Key value pairs for parenthesis
  let parenthesis = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Parenthesis stack
  let parenthesisStack = [];

  // Looping the input string and comparing the stack to match the parenthesis
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "(" || data[i] === "[" || data[i] === "{") {
      parenthesisStack.push(data[i]);
    } else if (
      parenthesisStack[parenthesisStack.length - 1] === parenthesis[data[i]]
    ) {
      parenthesisStack.pop();
    } else return false;
  }

  // If stack is empty return true
  return parenthesisStack.length ? false : true;
};

console.log(checkIfValidParenthesis(""));
