import React, {useState, useEffect} from "react";
import _uniqueId from 'lodash/uniqueId';
import { doc, updateDoc} from "firebase/firestore";
import { db } from "../Configuraciones/firebase";
import DisplayNote from './DisplayNote';




const MakeNote = (props)=>{
    const [id] = useState(_uniqueId('prefix-89'));
    console.log(props)
    const [newtitle, setNewTitle] = useState('');
    const [newnote, setNewNote] = useState('');
    const fnTitle = (ev)=>{setNewTitle(ev.target.value)};
    const fnNote = (ev) => {setNewNote(ev.target.value)};

   

    const resetImput = () => {
       setNewTitle("");
       setNewNote("");
      
    }
       const upDateData = async ()=>{
        const notes = doc(db, "user", props.id);
        await updateDoc(notes, {
       [`note.${id}.title`]: newtitle,
       [`note.${id}.note`]: newnote,
     
      });
     }

     const fnSendReset = () => {
       upDateData();
       resetImput();
     }
     useEffect(()=>{
        upDateData()
    },[])
    
    return (
        <section>
        <h1>Hacer Nota</h1>
        <div>
           <label>Titulo</label>
           <input type='text' value={newtitle} onChange={fnTitle} required ></input>
           <label>Contenido</label>
           <input type="text" value={newnote} onChange={fnNote} required/>
           <button onClick={fnSendReset} >Enviar</button>
        </div>  
        <DisplayNote id={props.id} collection='user'/> 
        </section>
    )
}

export default MakeNote