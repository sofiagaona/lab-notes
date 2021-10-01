import React, {useState} from 'react';
import ReactModal from 'react-modal';
import _uniqueId from 'lodash/uniqueId';
import { doc, updateDoc} from "firebase/firestore";
import { db } from "../Configuraciones/firebase";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
};
const ModalReact = ({mode, isVisible, notes, heandleModal, idDoc} )=>{
//const {title,note}=notes
const [idNote] = useState(_uniqueId('prefix-89'));
const [newTitle, setNewtitle]=useState('');
const [newNote, setNewnote]=useState('');
const [open, setOpen]=useState(isVisible);
const heandleTitle = (ev) =>{setNewtitle(ev.target.value)}
const heandleNote = (ev) =>{setNewnote(ev.target.value)}
const fnClose = () => {
    setOpen(false);
    heandleModal()
}

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
    const notes = doc(db, "user", idDoc);
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


return(
    <ReactModal isOpen={open} style={customStyles}>
        <form action="" onSubmit={fnheandleSubmit}>
         <button className='closeButton' onClick={fnClose}>X</button>
         <input type="text" value={newTitle} onChange={heandleTitle} placeholder="Titulo"/>
         <textarea type="text" value={newNote} onChange={heandleNote} placeholder="Escibe una nota"></textarea>
         {
             mode==='edit'?
             <button type='submit' className="btn-edit" >Editar Nota</button>:
             <button type='submit' className="btn-create">Crear nota</button>
         }
        </form>

    </ReactModal>
)
}
export default ModalReact