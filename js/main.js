//recieving data from user
function askVariables(a, b, c) {
  do {
    a = prompt("Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0.\nВведіть a")
    if (a == null) {
      alert("Жаль. Сподіваюсь ще побачитись")
      return null;
    }
  } while (isNaN(a) || a == "" || a == " ");
  do {
    b = prompt(`a = ${a}` + "\n" + "Введіть b")
    if (b == null) {
      alert("Жаль. Сподіваюсь ще побачитись")
      return null;
    }
  } while (isNaN(b) || b == "" || b == " ");
  do {
    c = prompt(`a = ${a}, b = ${b}` + "\n" + "Введіть c")
    if (c == null) {
      alert("Жаль. Сподіваюсь ще побачитись")
      return null;
    }
  } while (isNaN(c) || c == "" || c == " ");
  return {
    a: a,
    b: b,
    c: c,
  }
}

//callback
function checkA() {
  alert("a = 0. Рівняння не має рішень")
}

//calculations
function findSolutions(data, ifInvalid) {

  if (data === null) {
    return null;
  }

  if (data.a == 0) {
    ifInvalid();
    return null;
  }

  let d = (data.b * data.b) - (4 * data.a * data.c);
  if (d > 0) {
    x1 = (-data.b + Math.sqrt(d)) / (2 * data.a);
    x2 = (-data.b - Math.sqrt(d)) / (2 * data.a);
    return {
      d: d,
      x1: x1,
      x2: x2,
    }
  } else if (d < 0) {
    return {
      d: d,
      x1: null,
      x2: null,
    }
  } else if (d == 0) {
    x1 = (-data.b + Math.sqrt(d)) / (2 * data.a);
    return {
      d: d,
      x1: x1,
      x2: null,
    }
  }
}

//showing results
function showSolutions(results) {
  if (results === null) {
    return null;
  }
  if (results.d < 0) {
    alert("D < 0. Рівняння не має рішень");
    return;
  } else if (results.d > 0) {
    alert(`D > 0. Корені рівняння: ${results.x1}, ${results.x2}`);
    return;
  } else if (results.d === 0) {
    alert(`D = 0. Єдиний корень рівняння: ${results.x1}`);
    return;
  }
}

let variables = askVariables();
let solutions = findSolutions(variables, checkA);
showSolutions(solutions);