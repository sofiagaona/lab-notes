import React, {useState, useEffect} from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Configuraciones/firebase";
import CointeinerNot from './cointeinerNote';
import ModalReact from './Modal';


const DisplayNote =(props) => {
   const [notes, setNotes]= useState([]);
   const [isVisible, setIsvisible]=useState(false);
   //const newNote={title:'', note:''};
   const collection = props.collection;
   const idUser = props.id;

       useEffect(()=>{
    
        onSnapshot(doc(db, collection, idUser), (snap) => {
           console.log("Current data: ", snap.data());
           const notesdoc= snap.data().note;
           const keysSnap = Object.keys(notesdoc);
           const document=[]
           keysSnap.forEach((key)=>{
               document.push([key,notesdoc[key].title,notesdoc[key].note])
           })
           setNotes(document);
           });
    },[]);

    const fnshowModal = () =>{setIsvisible(true)}
    const fnhandelModal = () =>{setIsvisible(false)}
   
return(
    <section>
    <div>
    {
          notes.map((note) => (
           <CointeinerNot note={note[2]} title={note[1]} id={note[0]}/>
           
          ))
        }

    </div>
    <button className="add-Bttn" onClick={fnshowModal}>+
     {isVisible &&
         <ModalReact mode='create' isVisible= {isVisible} note={notes} heandleModal={fnhandelModal} idDoc={props.id}/>
     } 
     </button>   
    </section>
)
}
export default DisplayNote