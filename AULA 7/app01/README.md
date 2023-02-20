## :books: AULA 07

Enviar funções para os componentes.

## :bookmark: NOTAS

**Criando funções para enviar ao componente Dados.js**
###### Corpo.js
```javascript
import React from 'react'
import Dados from './Dados'

export default function Corpo(){

    const cnl=()=>{
        return 'CFB Cursos'
    }

    const yt=()=>{
        return 'youtube.com/cfbcursos'
    }

    const curso = 'React.js'

    const somar=(v1,v2)=>{
        return v1+v2;
    }

    return( 
        <section>
            <Dados 
                canal={cnl}
                youtube={yt}
                curso={curso}
                somar={somar}
            /> 
        </section>
    );
}
```

<br/>


**Criando utilizando a função com variáveis declaradas:**
###### Dados.js
```javascript
import React from "react";

export default function Dados(props){

    let n1 = 10
    let n2 = 20

    return(
        <section>
            <p>Canal: {props.canal()}</p>
            <p>YouTube: {props.youtube()}</p>
            <p>Curso: {props.curso}</p>
            <p>{'A soma de ' + n1 + ' e ' + n2 + ' é igual a ' + props.somar(n1,n2)}</p>
        </section>
    );
}
```
