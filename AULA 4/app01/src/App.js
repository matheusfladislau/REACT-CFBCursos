import React from 'react'
import Logo from './componentes/imgs/logo.png'

export default function App() {

  const canal=()=>{
    return('CFB Cursos')
  } // Arrow Function

  function curso(){
    return 'Curso de React'
  } // Function

  return (
    <>
      <header>
        <p>Canal: {canal()}</p>
        <br/>
        <p>{'Canal: ' + curso()}</p>
      </header>
      <>
        <img src={Logo}></img>
        <img src='/img/cr7.jpg'></img>
      </>
    </>
  );
}


