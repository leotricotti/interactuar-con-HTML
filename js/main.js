//Base de datos
//Depositos
class Operacion {
  constructor(fecha, hora, operacion, monto, saldo) {
    this.fecha = fecha;
    this.hora = hora;
    this.operacion = operacion;
    this.monto = monto;
    this.saldo = saldo;
  }
}

//Depositos realizados
const deposito1 = new Operacion(
  "08/07/2022",
  "15:55",
  "Depósito",
  "$ 15.000.00",
  "$ 125.343.00"
);
const deposito2 = new Operacion(
  "17/07/2022",
  "12:34",
  "Depósito",
  "$ 30.000.00",
  "$ 155.343.00"
);
const deposito3 = new Operacion(
  "10/07/2022",
  "12:18",
  "Depósito",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Pagos realizados
const pago1 = new Operacion(
  "01/07/2022",
  "11:25",
  "Pago Servicio",
  "$ 2.572.27",
  "$ 130.253.65"
);

const pago2 = new Operacion(
  "05/07/2022",
  "10:33",
  "Pago Servicio",
  "$ 5.362.87",
  "$ 127.156.65"
);

const pago3 = new Operacion(
  "17/07/2022",
  "08:55",
  "Pago Servicio",
  "$ 1.942.63",
  "$ 122.165.36"
);

//Extracciones realizadas
const extracc1 = new Operacion(
  "14/07/2022",
  "15:55",
  "Extracción",
  "$ 15.000.00",
  "$ 125.343.00"
);
const extracc2 = new Operacion(
  "03/07/2022",
  "12:34",
  "Extracción",
  "$ 30.000.00",
  "$ 95.343.00"
);
const extracc3 = new Operacion(
  "20/07/2022",
  "12:18",
  "Extracción",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Operaciones
const operaciones = [];
operaciones.push(deposito1, deposito2, deposito3);
operaciones.push(pago1, pago2, pago3);
operaciones.push(extracc1, extracc2, extracc3);

//Saldo inicial
let saldo = 100000;

//Pasar saldo a dinero
function convertir(dinero) {
  return (dinero = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(saldo));
}

//Menu inicio
let seleccion = prompt(
  "Seleccione la operación deseada: \n1) Consultas \n2) Salir"
);

//Funcion nueva operacion
function continuar(continuo) {
  continuo = prompt("Desea resalizar otra operacion? S/N: ").toUpperCase();
  if (continuo == "S") {
    seleccion = prompt(
      "Seleccione una operación: \n1) Consultas \n2) Salir"
    );
  } else if (continuo == "N") {
    seleccion = "2";
  } else {
    alert("Elija una opción valida");
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Consultas \n2) Salir"
    );
  }
}

//Función para consultas
function consultar(op, fn) {
  op = prompt(
    "Seleccione la operación deseada: \n1) Consulta de saldo \n2) Ultimos movimientos \n3) Menu Principal"
  );
  if (op == "1") {
    return alert("Su saldo es: " + convertir(saldo));
  } else if (op == "2") {
    operaciones.sort((a, b) => {
      if (a.fecha > b.fecha) {
        return 1;
      }
      if (a.fecha < b.fecha) {
        return -1;
      }
    });
    return console.table(operaciones);
  } else if (op == "3") {
    return (seleccion = prompt(
      "Seleccione la operación deseada: \n1) Consultas \n2) Depósitos \n3) Extracciones \n4) Pagos \n5) Salir"
    ));
  } else {
    alert("Elija una opcion valida.");
    op = prompt(
      "Seleccione la operación deseada: \n1) Consulta de saldo \n2) Ultimos movimientos \n4) Menu Principal"
    );
  }
}

//Función para salir del sistema
function salir() {
  return alert("Gracias por utilizar nuestros servicios.");
}

//Programa principal
while (seleccion != "2") {
  switch (seleccion) {
    case "1":
      consultar();
      break;

    case "continuo":
      continuar();
      break;

    default:
      alert("Opcion inválida. Vuelva a intentarlo.");
      break;
  }
  continuar();
}

salir();
