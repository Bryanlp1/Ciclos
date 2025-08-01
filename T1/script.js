// 1. Cambio de moneda
function cambiarMoneda() {
    let tasa = parseFloat(document.getElementById("tasa").value);
    if (isNaN(tasa) || tasa <= 0) {
        document.getElementById("resultado1").innerText = "Ingrese una tasa de cambio válida.";
        return;
    }
    let dolares = 5000 / tasa;
    document.getElementById("resultado1").innerText = `Q5,000.00 son $${dolares.toFixed(2)} (tasa Q${tasa}).`;
}

// 2. Metros a kilómetros
function convertirMetros() {
    let metros = parseFloat(document.getElementById("metros").value);
    if (isNaN(metros) || metros < 0) {
        document.getElementById("resultado2").innerText = "Ingrese una cantidad válida de metros (no negativa).";
        return;
    }
    let km = metros / 1000;
    document.getElementById("resultado2").innerText = `${metros} metros son ${km} kilómetros.`;
}

// 3. Verificar número
function verificarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);
    if (isNaN(numero)) {
        document.getElementById("resultado3").innerText = "Ingrese un número válido.";
        return;
    }
    let estado = numero > 0 ? "positivo" : (numero < 0 ? "negativo" : "cero");
    document.getElementById("resultado3").innerText = `El número ${numero} es ${estado}.`;
}

// 4. Descuento farmacia
function calcularDescuento() {
    let precio = parseFloat(document.getElementById("precio").value);
    if (isNaN(precio) || precio <= 0) {
        document.getElementById("resultado4").innerText = "Ingrese un precio válido.";
        return;
    }
    let descuento = precio * 0.10;
    let total = precio - descuento;
    document.getElementById("resultado4").innerText = `Descuento: Q${descuento.toFixed(2)}, Precio final: Q${total.toFixed(2)}.`;
}

// 5. Interés bancario
function calcularInteres() {
    let deposito = parseFloat(document.getElementById("deposito").value);
    if (isNaN(deposito) || deposito <= 0) {
        document.getElementById("resultado5").innerText = "Ingrese una cantidad válida.";
        return;
    }
    let total = deposito * 1.20;
    document.getElementById("resultado5").innerText = `Cantidad final con 20% de interés: Q${total.toFixed(2)}.`;
}

// 6. Promedio de calificaciones
function calcularPromedio() {
    let notas = [];
    for (let i = 1; i <= 5; i++) {
        let val = parseFloat(document.getElementById(`nota${i}`).value);
        if (isNaN(val)) {
            document.getElementById("resultado6").innerText = "Ingrese todas las calificaciones.";
            return;
        }
        notas.push(val);
    }
    let suma = notas.reduce((a, b) => a + b, 0);
    let promedio = suma / 5;
    let estado = promedio >= 60 ? "Aprobado" : "Reprobado";
    document.getElementById("resultado6").innerText = `Promedio: ${promedio.toFixed(2)} - ${estado}.`;
}
