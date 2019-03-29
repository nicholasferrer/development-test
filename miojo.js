'use strict'

// numero maximo de iteracoes
const max_iteracoes = Number.MAX_SAFE_INTEGER;

/**
 * Verifica se os argumentos estao corretos
 * @param {*} arr 
 */
const valida_args = (arr) => {
    if (arr.lengh < 3) {
        return true;
    }
    for (let i = 0; i < 3; i++) {
        if (isNaN(arr[i])) {
            return true;
        }
    }
    return false;
}

// atribuindo os parametros as variaveis globais
const amp1 = parseInt(process.argv[2], 10),
    amp2 = parseInt(process.argv[3], 10),
    tCozimento = parseInt(process.argv[4], 10);

/**
 * Verifica se é possivel resolver o problema com os valores passados
 * @param {*} amp1 
 * @param {*} amp2 
 * @param {*} miojo 
 */
const verifica = (amp1, amp2, miojo) => {
    // os tempos das ampulhetas deve ser maior
    if (amp1 <= miojo || amp2 <= miojo) {
        console.log(`O tempo das ampulhetas precisa ser superior que o tempo de cozimento.`);
        process.exit(1)
    }
}

verifica(amp1, amp2, tCozimento);

let tAmp1 = amp1,
    tAmp2 = amp2,
    checaTempo = 0,
    soma = 0,
    tempoTotal = 0;

/**
 * Quantidade de iteracoes para determinar o tempo minimo do miojo ficar pronto
 */
while (checaTempo < max_iteracoes) {
    // recebe o tempo da menor subAmpulheta
    checaTempo = tAmp1 > tAmp2 ? tAmp2 : tAmp1;
    if (checaTempo == tCozimento) {
        tempoTotal += checaTempo;
        break;
    } else {
        // resolve as diferenças e acrescenta ao tempo total
        if (tAmp1 > tAmp2) {
            tAmp1 = tAmp1 - tAmp2
            tempoTotal += tAmp2;
            tAmp2 = amp2;
        } else {
            tAmp2 = tAmp2 - tAmp1
            tempoTotal += tAmp1;
            tAmp1 = amp1;
        }
    }
    soma++;
}

// imprime resultados
console.log(`\nTempo ampulheta 1:     ${amp1} minutos`);
console.log(`Tempo ampulheta 2:     ${amp2} minutos`);
console.log(`Tempo de cozimento:    ${checaTempo} minutos`);
console.log(`Tempo total de espera: ${tempoTotal} minutos`);
console.log(`Iterações necessarias: ${soma}\n`);
