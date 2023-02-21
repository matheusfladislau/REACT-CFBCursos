import React from 'react'
import Logo from './imgs/logo.png'

export default function Header() {
  return (
    <header>
        <img src={Logo}></img>
        <h1>CFB Cursos</h1>
    </header>
  );
}