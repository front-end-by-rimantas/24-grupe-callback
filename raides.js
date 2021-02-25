const pirma = text => text[0];
const paskutine = text => text[text.length - 1];

const kokiaRaide = (kelinta, tekstas) => {
    const raide = kelinta(tekstas);
    console.log(raide);
}

kokiaRaide(pirma, 'Labas');
kokiaRaide(paskutine, 'Labas');

console.log(pirma('Labas'));
console.log(paskutine('Labas'));