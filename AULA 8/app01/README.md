## :books: AULA 08

Usando CSS em React.

## :bookmark: NOTAS

#### Maneiras de utilizar CSS em React:

- **inline**
###### App.js

```javascript
import React from 'react'

export default function App() {
  return (
    <>
      <h1 style={{color:'#f00', fontSize: '5em'}}>CFB Cursos</h1>
    </>
  );
} 
```

<br/>

- **incorporado**
###### App.js

```javascript
import React from 'react'

export default function App() {
  const textoDestaque={
    color:'#00f',
    fontSize:'3em'
  }

  return (
    <>
      <h2 style={textoDestaque}>Curso de React</h2>
    </>
  );
} 
```


<br/>

- **externo**
###### App.js

```javascript
import React from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <section className='caixa'>
        <p className='texto'>Se inscreva em nosso canal e nos siga no Instagram</p>
        <a href='#'>CFB Cursos</a>
      </section>
    </>
  );
} 
```

###### App.css

```css
.caixa{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.caixa > a{
  text-decoration: none;
  color: #f00;
}

.caixa > a:hover{
  background-color: #f00;
  color: #fff;
}

.texto{
  color: #0f0;
  font-size: 1em;
}
```

## :thinking: Importante lembrar que:
- Ao trabalhar com **JSX**, utilizar o método camel: `fontSize`, e o uso de `,` como separador;
- Ao trabalhar com **.CSS**, utilizar o método tradicional: `font-size`, e o uso de `;` como separador.
- Importar o .CSS no componente PAI fará com que ele seja aplicável em todos os filhos.
