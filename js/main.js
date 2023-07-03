let a;
let b;
let c;
let d;
let x1;
let x2;

function askVariables() {
  do {
    a = prompt("Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0.\nВведіть a")
    if (a == null) {
      alert("Жаль. Сподіваюсь ще побачитись")
      return a = undefined;
    }
  } while (isNaN(a) || a == "" || a == " ");
  do {
    b = prompt(`a = ${a}` + "\n" + "Введіть b")
    if (b == null) {
      alert("Жаль. Сподіваюсь ще побачитись")
      return b = undefined;
    }
  } while (isNaN(b) || b == "" || b == " ");
  do {
    c = prompt(`a = ${a}, b = ${b}` + "\n" + "Введіть c")
    if (c == null) {
      alert("Жаль. Сподіваюсь ще побачитись")
      return c = undefined;
    }
  } while (isNaN(c) || c == "" || c == " ");
}

function findDiscriminant() {
  d = (b * b) - (4 * a * c);
  return d;
}

function findSolutions() {
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d < 0) {
    x1 = "";
    x2 = "";
  } else if (d == 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = "";
  }
}

function showSolutions() {
  if (a == 0) {
    alert("a = 0. Рівняння не має рішень");
  } else if (d < 0) {
    alert("D < 0. Рівняння не має рішень");
  } else if (d > 0) {
    alert(`D > 0. Корені рівняння: ${x1}, ${x2}`);
  } else if (d == 0) {
    alert(`D = 0. Єдиний корень рівняння: ${x1}`);
  }
}

askVariables();
findDiscriminant();
findSolutions();
showSolutions();