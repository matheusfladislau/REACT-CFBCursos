import React from "react";

export default function Dados(props){

    let n1 = 10
    let n2 = 20

    return(
        <section>
            <p>Canal: {props.canal}</p>
            <p>YouTube: {props.youtube()}</p>
            <p>Curso: {props.curso}</p>
            <p>{'A soma de ' + n1 + ' e ' + n2 + ' é igual a ' + props.somar(n1,n2)}</p>
        </section>
    );
}