// 1. Entradas de teste
const entrada1 = "10/02/2026 - 10:00";
const entrada2 = "10/02/2026 - 10:00";

/**
 * Converte a string "DD/MM/YYYY - HH:mm" em um objeto Date
 */
function criarData(stringData) {
    const [data, hora] = stringData.split(" - ");
    const [dia, mes, ano] = data.split("/");
    const [horas, minutos] = hora.split(":");

    // O mês no JS começa em 0 (Janeiro = 0)
    return new Date(ano, mes - 1, dia, horas, minutos);
}

/**
 * Formata um objeto Date para o padrão DD/MM/YYYY
 */
function formatarDataBR(dataObjeto) {
    return dataObjeto.toLocaleDateString('pt-BR');
}

// 2. Processamento
const d1 = criarData(entrada1);
const d2 = criarData(entrada2);

// Formatando para exibição conforme solicitado
const dataFormatada1 = formatarDataBR(d1);
const dataFormatada2 = formatarDataBR(d2);

console.log(dataFormatada1);
console.log(dataFormatada2);