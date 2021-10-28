import React, { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { IoIosCreate } from 'react-icons/io';
import { db } from '../Configuraciones/firebase';
import CointeinerNot from './cointeinerNote';
import ModalReact from './Modal';

const DisplayNote = (props) => {
  const [notes, setNotes] = useState([]);
  const [isVisible, setIsvisible] = useState(false);
  const { collection } = props;
  const idUser = props.id;

  useEffect(() => {
    onSnapshot(doc(db, collection, idUser), (snap) => {
      const notesdoc = snap.data().note;
      const keysSnap = Object.keys(notesdoc);
      const document = [];
      keysSnap.forEach((key) => {
        document.push([key, notesdoc[key].title, notesdoc[key].note]);
      });
      setNotes(document);
    });
  }, [collection, idUser]);

  const fnshowModal = () => {
    setIsvisible(true);
  };
  const fnhandelModal = () => {
    setIsvisible(false);
  };
  const newnote = { title: '', note: '', id: '' };

  return (
    <section>
      <div className="box-bttn">
        <button type="button" className="add-Bttn" onClick={fnshowModal}>
          <IoIosCreate />
          Nueva Nota
          {isVisible && (
            <ModalReact
              mode="create"
              isVisible={isVisible}
              notes={newnote}
              heandleModal={fnhandelModal}
              idDoc={props.id}
            />
          )}
        </button>
      </div>
      <div>
        {notes.map((note) => (
          <CointeinerNot
            key={note.toString()}
            note={note[2]}
            title={note[1]}
            id={note[0]}
            idUser={props.id}
          />
        ))}
      </div>
    </section>
  );
};
export default DisplayNote;
