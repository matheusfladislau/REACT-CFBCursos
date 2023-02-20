## :books: AULA 06

Enviar propriedades para os componentes com PROPS.

## :bookmark: NOTAS
**Criando componente Dados.js que receberá as propriedades:**

###### Dados.js
```javascript
import React from "react";

export default function Dados(props){
    return(
        <section>
            <p>Canal: {props.canal}</p>
            <p>YouTube: {props.youtube}</p>
            <p>Curso: {props.curso}</p>
        </section>
    );
}
```

<br/>

**Utilizando o componente no arquivo Corpo.js:**

###### Corpo.js
```javascript
import React from 'react'
import Dados from './Dados'

export default function Corpo(){
    return(
        <section>
            <Dados canal='CFB Cursos' youtube='youtube.com/cfbcursos' curso='React.js'
            /> 
        </section>
    );
}
```

#### :warning: Importante!
**Atributos deverão sempre ter o mesmo nome ao enviar e receber em props.**


<br/>

## :thinking: Também dá pra fazer assim...
**Utilizando propriedades:**

###### Corpo.js
```javascript
import React from 'react'
import Dados from './Dados'

export default function Corpo(){

    const cnl='CFB Cursos'
    const yt='youtube.com/cfbcursos'
    const curso='React.js'

    return(
        <section>
            <Dados 
                canal={cnl}
                youtube={yt}
                curso={curso}
            /> 
        </section>
    );
}
```
