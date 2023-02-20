## :books: AULA 05

Como criar componentes em React.

## :bookmark: NOTAS

**Criando componentes para serem utilizados no APP.js:** 
###### Caminho: `app01/src/componentes/`

> Header.js

```javascript 
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
```
<br/>

> Corpo.js

```javascript 
import React from 'react'

export default function Corpo(){
    return(
        <section>
            <h2>Curso de React</h2>
            <p>Se inscreva em nosso canal!</p>
            <p>Ative o sininho e clica no joinha xdd</p>
        </section>
    );
}
```

<br/>

**Utilizando componentes no APP.js:**


> APP.js

```javascript 
import React from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'

export default function App() {
  return (
    <>
      <Header/>
      <Corpo/> 
    </>
  );
}

```
