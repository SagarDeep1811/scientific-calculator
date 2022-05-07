const output = document.querySelector(".out");
const answer = document.querySelector(".ans");

// constants--------------------------------------------------------------
const one = document.querySelector(".num1");
const two = document.querySelector(".num2");
const three = document.querySelector(".num3");
const four = document.querySelector(".num4");
const five = document.querySelector(".num5");
const six = document.querySelector(".num6");
const seven = document.querySelector(".num7");
const eight = document.querySelector(".num8");
const nine = document.querySelector(".num9");
const zero = document.querySelector(".num0");
const pi = document.querySelector(".numpi");
const e = document.querySelector(".nume");

const nums = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  pi,
  e,
];

// binary operators----------------------------------------------
const plus = document.querySelector(".op1");
const minus = document.querySelector(".op2");
const multiply = document.querySelector(".op3");
const quotient = document.querySelector(".op4");
const openingBracket = document.querySelector(".op10");
const closingBracket = document.querySelector(".op11");

// basic utilities-----------------------------------------------
const back = document.querySelector(".op5");
const clearAll = document.querySelector(".op6");
const decimal = document.querySelector(".op7");

// algebraic functions-------------------------------------------
const sqRoot = document.querySelector(".op8");
const cbRoot = document.querySelector(".op9");
const square = document.querySelector(".op22");
const cube = document.querySelector(".op23");
const log = document.querySelector(".op18");
const ln = document.querySelector(".op19");

// trigonometric functions---------------------------------------
const sin = document.querySelector(".op12");
const cos = document.querySelector(".op13");
const tan = document.querySelector(".op14");
const angUnit = document.querySelector(".op21");

const ops = [
  plus,
  minus,
  multiply,
  quotient,
  openingBracket,
  closingBracket,
  decimal,
];

// Functions---------------------------------------------------------------------

// let outValue = output.value;

const addValue = function (val) {
  output.value += val;
};

const displayOutput = function (val) {
  // output.value = eval(val).toFixed(7);
  output.value = eval(val);
};

const backSpace = () => {
  output.value = output.value.substring(0, output.value.length - 1);
};

const clearOutput = () => {
  output.value = " ";
};

const listener = (name) => {
  name.addEventListener("click", () => {
    addValue(`${name.value}`);
  });
};

answer.addEventListener("click", () => displayOutput(output.value));

back.addEventListener("click", () => backSpace());

clearAll.addEventListener("click", () => clearOutput());

const listenToNumbers = () => {
  nums.forEach((nm) => listener(nm));
};

const listenToOperators = (ar) => {
  ar.forEach((op) => listener(op));
};

const angularVal = () => {
  if (angUnit.value === "RAD")
    output.value = (eval(output.value) * Math.PI) / 180;
  if (angUnit.value === "DEG") output.value = (output.value / 180) * Math.PI;
};

// Event Listeners---------------------------------------------------------------->
listenToNumbers();
listenToOperators(ops);

// unresolved

angUnit.addEventListener("click", () => {
  if (angUnit.value === "RAD") {
    angUnit.value = "DEG";
    angularVal();
  }
  if (angUnit.value === "DEG") {
    angUnit.value = "RAD";
    angularVal();
  }
});

square.addEventListener("click", () => {
  // output.value += `  + ${Math.pow(
  //   output.value.charAt(output.value.length - 1),
  //   2
  // )}`;
  output.value = `${Math.pow(eval(output.value), 2)}`;
});

cube.addEventListener("click", () => {
  output.value = `${Math.pow(eval(output.value), 3)}`;
});

log.addEventListener("click", () => {
  output.value = `${Math.log10(eval(output.value))}`;
});

ln.addEventListener("click", () => {
  output.value = `${Math.log(eval(output.value))}`;
});

sqRoot.addEventListener("click", () => {
  output.value = `${Math.sqrt(eval(output.value))}`;
});

cbRoot.addEventListener("click", () => {
  output.value = `${Math.cbrt(eval(output.value))}`;
});

sin.addEventListener("click", () => {
  output.value = `${Math.sin(eval(output.value)).toPrecision(7)}`;
});

cos.addEventListener("click", () => {
  output.value = `${Math.cos(eval(output.value)).toPrecision(7)}`;
});

tan.addEventListener("click", () => {
  output.value = `${Math.tan(eval(output.value)).toPrecision(7)}`;
});
