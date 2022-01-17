
function TVS() {

    var tvp32 = 500.00;
    var tvp40 = 1000.00;

    var total1 = 4 * tvp32;

    var total2 = 4 * tvp40;

    var totalt = total1 + total2;
    console.log('Valor Total Das TVs 32P: ' + total1);
    console.log('Valor Total Das TVs 40P: ' + total2);
    console.log('Valor Total De Todas As TVs: ' + totalt);

    return total1 + total2;
}

function Players() {
    var PA = 292.00;
    var PS = 249.00;

    var total1 = 2 * PA;

    var total2 = 2 * PS;

    var totalt = total1 + total2;
    console.log('Valor Total Dos Players: ' + total1);
    console.log('Valor Total Dos Players Sugundarios: ' + total2);
    console.log('Valor Total De Todos Players: ' + totalt);

    return total1 + total2;
}


function Planos() {

    var mensal = 10;
    var bronze = 39.00;
    var prata = 49.00;
    var ouro = 59.00;
    var diamante = 69.00

    var total = prata * mensal;
    console.log('');
    console.log('Valor Do Plano: ' + total);
    return total;
}


var mao = 2000.00


var r = TVS() + Players() + Planos() + mao;

console.log('Investimento Inicial: ' + r);

