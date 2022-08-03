//********* Consultas **********//

//Menu consultas
let seleccion = prompt(
  "Seleccione la operación deseada: \n1) Últimos Movimientos \n2) Pago Mis Cuentas \n3) Transferencias \n4) Salir "
);

//Ver últimos movimientos
function Movement(fecha, hora, operacion, monto, saldo) {
  this.fecha = fecha;
  this.hora = hora;
  this.operacion = operacion;
  this.monto = monto;
  this.saldo = saldo;
}

//Base datos movimientos
const movement1 = new Movement(
  "01/07/2022",
  "15:55",
  "Depósito",
  "$ 15.000.00",
  "$ 125.343.00"
);
const movement2 = new Movement(
  "03/07/2022",
  "12:34",
  "Extracción",
  "$ 30.000.00",
  "$ 95.343.00"
);
const movement3 = new Movement(
  "05/07/2022",
  "12:18",
  "Depósito",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Consultar pagos
function Payments(fecha, hora, operacion, monto, saldo) {
  this.fecha = fecha;
  this.hora = hora;
  this.operacion = operacion;
  this.monto = monto;
  this.saldo = saldo;
}

//Pagos
const pago1 = new Payments(
  "08/07/2022",
  "11:25",
  "Edelap",
  "$ 2.572.27",
  "$ 130.253.65"
);

const pago2 = new Payments(
  "10/07/2022",
  "10:33",
  "Camuzzi Gas Pampeana",
  "$ 5.362.87",
  "$ 127.156.65"
);

const pago3 = new Payments(
  "13/07/2022",
  "08:55",
  "ARBA Inmobiliario",
  "$ 1.942.63",
  "$ 122.165.36"
);

//Consultar Transferencias
function Transfer(fecha, hora, operacion, monto, saldo) {
  this.fecha = fecha;
  this.hora = hora;
  this.operacion = operacion;
  this.monto = monto;
  this.saldo = saldo;
}

//Base datos transferencias
const transfer1 = new Transfer(
  "14/07/2022",
  "15:55",
  "Trans. Recibida",
  "$ 15.000.00",
  "$ 125.343.00"
);
const transfer2 = new Transfer(
  "17/07/2022",
  "12:34",
  "Trans. Enviada ",
  "$ 30.000.00",
  "$ 95.343.00"
);
const transfer3 = new Transfer(
  "20/07/2022",
  "12:18",
  "Trans. Recibida",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Creacion array pagos
const pagoServ = [];
pagoServ.push(pago1, pago2, pago3);

//Creacion array transfererencias
const transferido = [];
transferido.push(transfer1, transfer2, transfer3);

//Creación array movimientos
const operaciones = pagoServ.concat(transferido);
operaciones.unshift(movement1, movement2, movement3);


//Función últimos movimientos
function mostrarMovimientos() {
  console.table(operaciones);
}

//Función pagos
function mostrarPagos() {
  console.table(pagoServ);
}

//Funcion Transferencia
function mostrarTransfer() {
  console.table(transferido);
}

//Funcion nueva operacion
function continuar() {
  let continuo = prompt("Desea resalizar otra operacion? S/N: ");
  if (continuo == "S" || continuo == "s") {
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Últimos Movimientos \n2) Pago Mis Cuentas \n3) Transferencias \n4) Salir "
    );
  } else if (continuo == "n" || continuo == "N") {
    seleccion = "4";
  } else {
    alert("Elija una opción valida");
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Últimos Movimientos \n2) Pago Mis Cuentas \n3) Transferencias \n4) Salir "
    );
  }
}

//Función para salir del sistema
function salir() {
  return alert("Gracias por utilizar nuestros servicios.");
}

//Programa principal
while (seleccion != "4") {
  switch (seleccion) {
    case "1":
      mostrarMovimientos();
      break;

    case "2":
      mostrarPagos();
      break;

    case "3":
      mostrarTransfer();
      break;

    default:
      alert("Opcion inválida. Vuelva a intentarlo.");
      break;
  }
  continuar();
}

salir();
