import React, {useState} from "react";
import ModalReact from "./Modal";

const CointeinerNot = (props)=>{

  console.log(props.note);
  console.log(props.title);
  console.log(props.id);
  const [isVisible, setIsvisible]=useState(false);
  const fnshowModal = () =>{setIsvisible(true)}
  const fnhandelModal = () =>{setIsvisible(false)}
   return(
   <section>
    
    
    <div className='box-note'>
        
        <section>
           <p>{props.title}</p>
           <p>{props.note}</p>
           <button id={props.id}>Eliminar</button>
           <button id={props.id} onClick={fnshowModal}>Editar</button>
           <button id={props.id}>Archivar</button>
        </section>
        {
        isVisible &&
         <ModalReact mode='edit' isVisible= {isVisible} note={props} heandleModal={fnhandelModal} idDoc={props.id}/>
       } 
       
        
    </div>
    </section>
   )
}
export default CointeinerNot