import React from 'react';
import DisplayNote from './DisplayNote';

const MakeNote = (props) => (
  /* const [id] = useState(_uniqueId('prefix-89'));
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
    },[]) */

  <section>
    <DisplayNote id={props.id} collection="user" />
  </section>
);
export default MakeNote;
