import React, {useState, useEffect} from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Configuraciones/firebase";
import CointeinerNot from './cointeinerNote';


const DisplayNote =(props) => {
   const [notes, setNotes]= useState([]);
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
   
return(
    <section>
    <div>
    {
          notes.map((note) => (
            <CointeinerNot note={note[2]} title={note[1]} id={note[0]}/>
          ))
        }

    </div>
         
    </section>
)
}
export default DisplayNote