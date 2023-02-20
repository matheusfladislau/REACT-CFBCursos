## :books: AULA 04

Expressões em JSX. Inserção de imagens no App.

## :bookmark: NOTAS

**Usando funções JS para retornar dados utilizados no APP.js:**
###### APP.js
```javascript 
export default function App() {

  const canal=()=>{
    return('CFB Cursos')
  } // Arrow Function

  function curso(){
    return 'Curso de React'
  } // Function

  return (
    <>
        <p>Canal: {canal()}</p>
        <br/>
        <p>{'Curso: ' + curso()}</p>
    </>
  );
}
```

<br/>

**Usando IMAGENS na pasta `public/` e na pasta `src/`:**
- `src/`
###### APP.js
```javascript 
import Logo from './componentes/imgs/logo.png'

export default function App() {
  return (
    <>
      <img src={Logo}></img>
    </>
  );
}
```

- `public/`
###### APP.js
```javascript 
export default function App() {
  return (
    <>
      <img src='/img/cr7.jpg'></img>
    </>
  );
}
```
## :floppy_disk: De acordo com as necessidades...
- **A pasta `public` possui o `index.html`, que é a página principal onde são colocados os componentes do aplicativo. Portanto, ao colocar imagens na pasta `public`, você pode puxar diretamente no html.**
- **A pasta `src` NÃO possui o `index.html`, então é necessário fazer o import para puxar o logo.**

