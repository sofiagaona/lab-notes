import React from "react";

const CointeinerNot = (props)=>{

  console.log(props.note);
  console.log(props.title);
  console.log(props.id);
  
   return(
   <section>
    
    
    <div className='box-note'>
        
        <section>
           <p>{props.title}</p>
           <p>{props.note}</p>
           <button id={props.id}>Eliminar</button>
           <button id={props.id}>Editar</button>
           <button id={props.id}>Archivar</button>
        </section>
         
       
        
    </div>
    </section>
   )
}
export default CointeinerNot