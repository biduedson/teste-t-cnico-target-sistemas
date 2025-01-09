const estados = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 }
];

const somatotal = estados.reduce((acc, item) => acc + item.valor, 0);

for (let i = 0; i < estados.length; i++) {
    const percentual = (estados[i].valor / somatotal) * 100
    console.log(estados[i].estado + " teve um percentual de representação no valor total mesal da distribuidora de " + percentual.toFixed(1) + "%")
}
