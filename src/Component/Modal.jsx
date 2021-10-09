import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import _uniqueId from 'lodash/uniqueId';
import { doc, updateDoc, getDoc} from "firebase/firestore";
import { db } from "../Configuraciones/firebase";
import { getStorageValue } from '../Hook/useLocal Storage';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '5px 5px 10px black',
    border: 'none'
    
  },
};
const ModalReact = ({mode, isVisible, notes, heandleModal, idDoc, idUser} )=>{
    
const { title, note } = notes; 
const [idNote] = useState(_uniqueId('prefix-89'));
const [newTitle, setNewtitle]=useState(getStorageValue("newTitle",title));
const [newNote, setNewnote]=useState(getStorageValue("newNote",note));
const [open, setOpen]=useState(isVisible);
const heandleTitle = (ev) =>{setNewtitle(ev.target.value)}
const heandleNote = (ev) =>{setNewnote(ev.target.value)}
const fnClose = () => {
    setOpen(false);
    heandleModal()
}
useEffect(() => {
    localStorage.setItem("newTitle", JSON.stringify(newTitle));
  }, [newTitle]);

useEffect(() => {
    localStorage.setItem("newNote", JSON.stringify(newNote));
  }, [newNote]);

 

const fnheandleSubmit=(e)=>{
e.preventDefault();
if(mode==='edit'){
    fnUpdateNote()
}
else{
    fnCreateNote()
}
fnClose()
}
const fnUpdateNote = async ()=>{
    const notes = doc(db, "user", idUser);
    await updateDoc(notes, {
   [`note.${idDoc}.title`]: newTitle,
   [`note.${idDoc}.note`]: newNote
 
  });
 }

 const fnCreateNote = async ()=>{
    const notes = doc(db, "user", idDoc);
    await updateDoc(notes, {
   [`note.${idNote}.title`]: newTitle,
   [`note.${idNote}.note`]: newNote
 
  });
 }

 const removeItem = ()=>{
   localStorage.clear()
 }


return(
    <ReactModal isOpen={open} style={customStyles}>
        <div className="box-modal">
        <form className="modal" action="" onSubmit={fnheandleSubmit}>
         <div className="box-btn-close"><button className='closeButton' onClick={fnClose}>X</button></div>
         <input type="text" value={newTitle} onChange={heandleTitle} placeholder="Titulo"/>
         <textarea type="text" value={newNote} onChange={heandleNote} placeholder="Escibe una nota"></textarea>
         {
             mode==='edit'?
             <div className="box-btn-create"><button type='submit' className="btn-create"  onClick={removeItem}>Editar Nota</button></div> :
             <div className="box-btn-create"><button type='submit' className="btn-create" onClick={removeItem}>Crear nota</button></div>
         }
        </form>
        </div>

    </ReactModal>
)
}
export default ModalReact