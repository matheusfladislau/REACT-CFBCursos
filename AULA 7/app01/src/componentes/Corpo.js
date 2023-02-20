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
            <h2>Curso de React</h2>
            <p>Se inscreva em nosso canal!</p>
            <p>Ative o sininho e clica no joinha xdd</p>
            <Dados 
                canal={cnl}
                youtube={yt}
                curso={curso}
                somar={somar}
            /> 
        </section>
    );
}