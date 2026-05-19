function criarData(stringData) {
    const [data, hora] = stringData.split(" - ");
    const [dia, mes, ano] = data.split("/");
    const [horas, minutos] = hora.split(":");

    return new Date(ano, mes - 1, dia, horas, minutos);
}

function verificarAgenda(horario1, horario2) {
    const d1 = criarData(horario1);
    const d2 = criarData(horario2);

    if (d1.getTime() === d2.getTime()) {
        console.log("⚠️ Alerta: Os horários são idênticos! Existe uma sobreposição.");
    } else {
        console.log("✅ Os horários são diferentes.");
    }
}
const entrada1 = "10/02/2026 - 10:00";
const entrada2 = "10/02/2026 - 10:00";
verificarAgenda(entrada1, entrada2);