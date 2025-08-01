// Ejercicio 1
function contarCifras() {
  const numero = parseInt(document.getElementById("numeroInput").value);
  const resultado = document.getElementById("resultado1");

  if (isNaN(numero) || numero < 0) {
    resultado.textContent = "Debe ingresar un número entero positivo.";
    return;
  }

  if (numero < 10) {
    resultado.textContent = "Tiene 1 cifra.";
  } else if (numero < 100) {
    resultado.textContent = "Tiene 2 cifras.";
  } else if (numero < 1000) {
    resultado.textContent = "Tiene 3 cifras.";
  } else {
    resultado.textContent = "Error: el número tiene más de 3 cifras.";
  }
}

// Ejercicio 2
function promedioCalificaciones() {
  let suma = 0;
  for (let i = 1; i <= 4; i++) {
    let nota = parseFloat(prompt("Ingrese la calificación #" + i));
    suma += nota;
  }
  let promedio = suma / 4;
  const resultado = document.getElementById("resultado2");

  if (promedio >= 61) {
    alert("Aprobado con promedio de " + promedio);
    resultado.textContent = "✅ Aprobado con promedio de " + promedio.toFixed(2);
  } else {
    alert("Reprobado con promedio de " + promedio);
    resultado.textContent = "❌ Reprobado con promedio de " + promedio.toFixed(2);
  }
}

// Ejercicio 3
function sumarNumeros() {
  let sumaImpares = 0;
  let sumaPares = 0;
  let conteoPares = 0;
  let numero;

  do {
    numero = parseInt(prompt("Ingrese un número (0 para salir):"));
    if (numero !== 0) {
      if (numero % 2 === 0) {
        sumaPares += numero;
        conteoPares++;
      } else {
        sumaImpares += numero;
      }
    }
  } while (numero !== 0);

  let promedioPares = conteoPares > 0 ? (sumaPares / conteoPares) : 0;
  alert("Suma de impares: " + sumaImpares + "\nPromedio de pares: " + promedioPares.toFixed(2));
  document.getElementById("resultado3").textContent =
    "Suma de impares: " + sumaImpares + " | Promedio de pares: " + promedioPares.toFixed(2);
}

// Ejercicio 4
function calcularAumentos() {
  let totalAntiguos = 0;
  let totalNuevos = 0;
  let sueldo;

  do {
    sueldo = parseFloat(prompt("Ingrese el sueldo del empleado (o -1 para finalizar):"));

    if (sueldo === -1) break;
    if (isNaN(sueldo) || sueldo <= 0) continue;

    let aumento = sueldo < 1000 ? sueldo * 0.15 : sueldo * 0.12;
    let nuevoSueldo = sueldo + aumento;
    totalAntiguos += sueldo;
    totalNuevos += nuevoSueldo;

    alert(
      "Sueldo actual: Q" + sueldo.toFixed(2) +
      "\nAumento: Q" + aumento.toFixed(2) +
      "\nNuevo sueldo: Q" + nuevoSueldo.toFixed(2)
    );
  } while (true);

  document.getElementById("totalAntiguos").textContent =
    "Total sueldos antiguos: Q" + totalAntiguos.toFixed(2);
  document.getElementById("totalNuevos").textContent =
    "Total sueldos nuevos: Q" + totalNuevos.toFixed(2);
}
