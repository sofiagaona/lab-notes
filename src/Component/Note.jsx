import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Contextos/contexAuth';
// import MakeNote from './MakeNote';
import GoogleMaps from './GoogleMaps';
import DisplayNote from './DisplayNote';

const Note = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [error, SetError] = useState('');
  const [click, setClick] = useState(0);

  const fnLogOut = async () => {
    try {
      await logout;

      window.localStorage.clear();
      history.push('/');
    } catch (error) {
      SetError(error);
    }
  };

  return (
    <section>
      <div className="box-grid">
        <div className="secc-header">
          <div className="logo">
            <div className="box-parrafo">
              <p className="parrafo-note">Note`s</p>
            </div>
            <div className="box-clcle-yellow-note">
              <div className="circle-yellow-note" />
            </div>
            <div className="box-clcle-blue-note">
              <div className="circle-blue-note" />
            </div>
            <div className="box-clcle-purple-note">
              <div className="circle-purple-note" />
            </div>
          </div>
          <div className="btn-logout">
            <button type="button" onClick={fnLogOut}>
              Log-Out
            </button>
          </div>
        </div>
        <div className="secc-Nav">
          <div>
            <button
              type="button"
              className="btn-menu"
              onClick={() => {
                setClick(1);
              }}
            >
              Nota
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn-menu"
              onClick={() => {
                setClick(2);
              }}
            >
              Google Maps
            </button>
          </div>

          {error && <p>error</p>}
        </div>
        <div className="line-ver" />
        <div className="secc-Conteiner">
          {click === 1 ? (
            <DisplayNote id={currentUser} collection="user" />
          ) : click === 2 ? (
            <GoogleMaps />
          ) : click === 3 ? (
            <h1>Adios</h1>
          ) : (
            <h1 className="bienvenida">Bienvenido</h1>
          )}
        </div>
      </div>
    </section>
  );
};
export default Note;
