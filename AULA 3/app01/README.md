## :books: AULA 03

Entendendo a estrutura básica de um App React.

## :bookmark: NOTAS
### `node_modules`
Módulos instalados no aplicativo

### `public`
Tudo que pode ser acessado pelo aplicativo (link, img, etc).

### `src`
Arquivos que compõem o aplicativo.

<br />

###### APP.js
```javascript 
{
  import React from 'react' // importar biblioteca do React
  export default function App() {
    return (
      <>
        <p>CFB Cursos</p>
        <br/>
        <p>Curso de react</p>
      </>
    );
}

//Também poderia escrever (necessário remover na 3 linha):
//export default App();
```

  **Boa prática:** criar função com nome de arquivo.
