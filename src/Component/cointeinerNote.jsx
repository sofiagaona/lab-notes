import React, {useState} from "react";
import ModalReact from "./Modal";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../Configuraciones/firebase";

const CointeinerNot = (props)=>{

  console.log(props.note);
  console.log(props.title);
  console.log(props.id);
  console.log(props.idUser);
  const [isVisible, setIsvisible]=useState(false);
  const fnshowModal = () =>{setIsvisible(true)}
  const fnhandelModal = () =>{setIsvisible(false)}

  const fnDelete = async () => {
     const noteRef = doc(db, 'user', props.idUser);
     await updateDoc(noteRef, {
      [`note.${props.id}`]: deleteField()
});

  }
   return(
   <section>
    
    
    <div className='box-note'>
        
        <section className="box-conteiner">
           <div className="conteiner-note">
            <div className="box-title-not">
               <p>Titulo: <span> {props.title} </span></p>
               <p>{props.note}</p>
             </div>
             <div className="box-conteiner-btn">
               <button className="btn-note" id={props.id} onClick={fnDelete}>Eliminar</button>
               <button className="btn-note" id={props.id} onClick={fnshowModal}>Editar</button>
               <button className="btn-note" id={props.id}>Archivar</button>
             </div>
           </div>
        </section>
        {
        isVisible &&
         <ModalReact mode='edit' isVisible= {isVisible} notes={props} heandleModal={fnhandelModal} idDoc={props.id} idUser={props.idUser}/>
       } 
       
        
    </div>
    </section>
   )
}
export default CointeinerNot