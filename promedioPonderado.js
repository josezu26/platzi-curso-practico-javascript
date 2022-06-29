const notes = [
    {
        course : "Ingles",
        note : 16,
        percent : 30,
    },
    {
        course : "Matematicas",
        note : 18,
        percent : 10,
    },
    {
        course : "Tecnologia",
        note : 15,
        percent : 40,
    },
    {
        course : "Arte",
        note : 14,
        percent : 20,
    },
];

let suma;
suma = notes.map(
    (element) => {
        return element.note * (element.percent / 100);
    }
);

const prom = suma.reduce((sum = 0,element) => {return sum + element});

const promedio = prom;
