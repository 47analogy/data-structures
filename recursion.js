// counter using for loop
const counter = () => {
  for (let i = 0; i <= 10; i++) {
    console.log("loop", i);
  }
};

counter();

// counter using recursion
// need at least 1 base case and 1 base case

const counterRecursion = n => {
  console.log("recursion", n);
  if (n === 10) {
    return; // base case
  }
  return counterRecursion(n + 1);
};

counterRecursion(0);
