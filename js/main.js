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
  "Deposito",
  "$ 15.000.00",
  "$ 125.343.00"
);
const deposito2 = new Operacion(
  "17/07/2022",
  "12:34",
  "Deposito",
  "$ 30.000.00",
  "$ 155.343.00"
);
const deposito3 = new Operacion(
  "10/07/2022",
  "12:18",
  "Deposito",
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
  "Extraccion",
  "$ 15.000.00",
  "$ 125.343.00"
);
const extracc2 = new Operacion(
  "03/07/2022",
  "12:34",
  "Extraccion",
  "$ 30.000.00",
  "$ 95.343.00"
);
const extracc3 = new Operacion(
  "20/07/2022",
  "12:18",
  "Extraccion",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Cuentas 
const cuentas = [
{tipo: "Caja de Ahorro", moneda: "$", cuenta: "5069-5689756/4", identificador: "Cuenta", saldo: "$ 100.000,00"},
{tipo: "Cta Corriente", moneda: "$", cuenta: "5069-5689652/4", identificador: "Cuenta", saldo: "$ 200.000,00"},
{tipo: "Caja de Ahorro", moneda: "USD", cuenta: "5069-5685686/4", identificador: "Cuenta", saldo: "USD 5.000,00"},
]

//Operaciones
const operaciones = [];
operaciones.push(deposito1, deposito2, deposito3);
operaciones.push(pago1, pago2, pago3);
operaciones.push(extracc1, extracc2, extracc3);

//Odenar por fecha 
let ordenados = operaciones.sort((a, b) => {
  if (a.fecha > b.fecha) {
    return 1;
  }
  if (a.fecha < b.fecha) {
    return -1;
  }
});

//Consulta de saldo

function mostrarSaldo(){
  let text = document.querySelector(".text");
  text.innerText = "Cuentas";

  let table = document.createElement("table");
  table.className= "table table-hover";
  
  let tableHead = document.createElement("thead");
  tableHead.innerHTML = `
    <thead>
      <tr>
        <th scope="col">Tipo de Cuenta</th>
        <th scope="col">Moneda</th>
        <th scope="col">Cuenta</th>
        <th scope="col">Identificacion</th>
        <th scope="col">Saldo</th>
      </tr>
    </thead>
  `
  let tableBody = document.createElement("tbody");
  tableBody.className = "table-group-divider";
  
  for(const cuenta of cuentas){
      tableBody.innerHTML += `
          <tr>
              <td>${cuenta.tipo}</td>
              <td>${cuenta.moneda}</td>
              <td>${cuenta.cuenta}</td>
              <td>${cuenta.identificador}</td>
              <td>${cuenta.saldo}</td>
          </tr>
      `;
  }

  table.append(tableHead);
  table.append(tableBody);
  let tableContainer = document.querySelector(".table-container");
  tableContainer.append(table);
};

//Ultimos Movimientos
function mostarMovimientos(){
  let text = document.querySelector(".text");
  text.innerText = "Ultimos Movimientos";

  let table = document.createElement("table");
  table.className= "table table-hover";
  
  let tableHead = document.createElement("thead");
  tableHead.innerHTML = `
    <thead>
      <tr>
        <th scope="col">Fecha</th>
        <th scope="col">Hora</th>
        <th scope="col">Operacion</th>
        <th scope="col">Monto</th>
        <th scope="col">Saldo</th>
      </tr>
    </thead>
  `
  let tableBody = document.createElement("tbody");
  tableBody.className = "table-group-divider";
  
  for(const operacion of ordenados){
      tableBody.innerHTML += `
          <tr>
              <td>${operacion.fecha}</td>
              <td>${operacion.hora}</td>
              <td>${operacion.operacion}</td>
              <td>${operacion.monto}</td>
              <td>${operacion.saldo}</td>
          </tr>
      `;
  }

  table.append(tableHead);
  table.append(tableBody);
  let tableContainer = document.querySelector(".table-container");
  tableContainer.append(table);
};


//Menu inicio
let seleccion = prompt(
  "Seleccione la operaci??n deseada: \n1) Consultas \n2) Salir"
);


//Funcion nueva operacion
function continuar(continuo) {
  continuo = prompt("Desea resalizar otra operacion? S/N: ").toUpperCase();
  if (continuo == "S") {
    seleccion = prompt(
      "Seleccione una operaci??n: \n1) Consultas \n2) Salir"
    );
  } else if (continuo == "N") {
    seleccion = "2";
  } else {
    alert("Elija una opci??n valida");
    seleccion = prompt(
      "Seleccione la operaci??n deseada: \n1) Consultas \n2) Salir"
    );
  }
}

//Funci??n para consultas
function consultar(op) {
  op = prompt(
    "Seleccione la operaci??n deseada: \n1) Consulta de saldo \n2) Ultimos movimientos \n3) Menu Principal"
  );
  if (op == "1") {
    mostrarSaldo();
  } else if (op == "2") {
    mostarMovimientos();
  } else if (op == "3") {
    return (seleccion = prompt(
      "Seleccione la operaci??n deseada: \n1) Consultas \n2) Depositos \n3) Extracciones \n4) Pagos \n5) Salir"
    ));
  } else {
    alert("Elija una opcion valida.");
    op = prompt(
      "Seleccione la operaci??n deseada: \n1) Consulta de saldo \n2) Ultimos movimientos \n4) Menu Principal"
    );
  }
}

//Funci??n para salir del sistema
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
      alert("Opcion inv??lida. Vuelva a intentarlo.");
      break;
  }
  continuar();
}

salir();
