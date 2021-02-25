const plius = (a, b) => a + b;
const sudeti = plius;
const minus = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;

const math = (action, a, b) => {
    let rez = action(a, b);
    console.log(rez);
}

math(plius, 8, 5);
math(sudeti, 8, 5);
math(minus, 8, 5);
math(multi, 8, 5);
math(div, 8, 5);