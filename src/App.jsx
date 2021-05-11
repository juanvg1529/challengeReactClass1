import React from "react";
import "./styles.css";

export default function App() {
  let num1 = 2,
    num2 = 3;
  return (
    <div>
      <h1>Instancia aquí tus operaciones matemáticas:</h1>

      <Suma num1={2} num2={8} />
      <Resta num1={5} num2={1} />
      <Multiplicacion num1={3} num2={8} />
      <Division num1={10} num2={2} />
    </div>
  );
}

function Suma(props) {
  return (
    <div>
      La sumatoria entre {props.num1} y {props.num2} es:{" "}
      {props.num1 + props.num2}
    </div>
  );
}

function Resta(props) {
  return (
    <div>
      {" "}
      La resta entre {props.num1} y {props.num2} es: {props.num1 - props.num2}
    </div>
  );
}
function Multiplicacion(props) {
  return (
    <div>
      {" "}
      La multiplicacion entre {props.num1} y {props.num2} es:{" "}
      {props.num1 * props.num2}
    </div>
  );
}
function Division(props) {
  return (
    <div>
      {" "}
      La division entre {props.num1} y {props.num2} es:{" "}
      {props.num1 / props.num2}
    </div>
  );
}
// Crea un componente que reste dos números ➖ e instancialo en la función App

// Crea un componente que divida dos números ➗ e instancialo en la función App

// Crea un componente que múltiplique dos números  ✖️ e instancialo en la función App

/**
 * 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
 *
 * Challenge bonus:
 *
 * ¿Puedes hacer que en tus componentes se vean los números que
 * estan siendo sumados?
 *
 * Por ejemplo, para <Suma num1={4} num2={3}/>
 * mostrar un mensaje que diga:
 *
 * La sumatoria de 4 + 3 es 7.
 *
 * Realiza esto para el resto de tus componentes aritméticos.
 *
 * 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
 */
