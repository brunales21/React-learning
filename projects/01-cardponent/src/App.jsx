import { MyCard } from './MyCard'
import { Component1 } from './Component1'

export function App() {
  const miFunc = (nombre) => alert("Soy "+ nombre)
  return (
    <>
      <MyCard nombre={"Bruno"} apellido={"Mercado"} char={"@"} tarea={miFunc}/>
      <MyCard nombre={"hola"} apellido={"chau"} char={"@"} tarea={miFunc}/>
      <MyCard nombre={"Pepe"} apellido={"papo"} char={"@"} tarea={miFunc}/>
      

      <Component1 titulo={"lado izquierdo"}/>
      
    </>
  )
}

export default App
