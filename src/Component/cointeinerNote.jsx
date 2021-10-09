import React, {useState, useRef} from "react";
import ModalReact from "./Modal";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../Configuraciones/firebase";
import {AiFillPicture} from 'react-icons/ai'
import {handleFileChange} from '../firebaseStorage/firebaseStorage'
const CointeinerNot = (props)=>{

 
  const [isVisible, setIsvisible]=useState(false);
  const fileInput = useRef(null);
  const fnshowModal = () =>{setIsvisible(true)}
  const fnhandelModal = () =>{setIsvisible(false)}

  const fnDelete = async () => {
     const noteRef = doc(db, 'user', props.idUser);
     await updateDoc(noteRef, {
      [`note.${props.id}`]: deleteField()
});
  }

   const handleClick = () => {
    fileInput.current.click()
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
               <div className="patientactions-container">
            <input
                type="file"
                onChange={(e) => handleFileChange(e)}
                ref={fileInput} 
            />
            <div onClick={()=> handleClick()}></div>
        </div>
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