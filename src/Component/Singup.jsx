import { useHistory } from 'react-router';
import React, { useState, useRef, useEffect } from 'react';
import _uniqueId from 'lodash/uniqueId';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../Contextos/contexAuth';
import { db } from '../Configuraciones/firebase';
import GetStorageValue from '../Hook/GetStorageValue';

const FnSingUp = () => {
  const { signup } = useAuth();
  const history = useHistory();
  const [name, setName] = useState(GetStorageValue('name', ''));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verPassword, setverPassword] = useState('');
  const [error, setError] = useState('');
  const [setLoading] = useState(false);
  const unmounted = useRef(false);
  const [id] = useState(_uniqueId('prefix-89'));

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  const setData = async (idUser) => {
    const notes = doc(db, 'user', idUser);
    await setDoc(notes, {
      note: {
        [id]: {
          title: '',
          note: ''
        }
      }
    });
  };

  const formSingup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password === verPassword) {
      try {
        const users = await signup(email, password);
        const idUser = users.user.uid;
        setData(idUser);
        history.push('/note');
      } catch (error) {
        setError(error);
      }
    } else {
      setError('Verifique que las  contraseña sean iguales');
    }

    if (!unmounted) {
      setLoading(false);
    }
  };

  return (
    <div className="box-singup">
      <section>
        <h1 className="txt-register">Registro</h1>
        <div className="line-singup" />
      </section>
      <section className="box-form">
        <form className="form-singup" onSubmit={formSingup}>
          <label htmlFor="input-name" className="form-singup-label">
            Nombre:
            <input
              type="text"
              id="input-name"
              value={name}
              required
              onChange={(ev) => setName(ev.target.value)}
              className="form-singup-input"
            />
          </label>
          <label htmlFor="input-email" className="form-singup-label">
            Correo:
            <input
              type="email"
              id="input-email"
              value={email}
              required
              onChange={(ev) => setEmail(ev.target.value)}
              className="form-singup-input"
            />
          </label>
          <label htmlFor="input-password" className="form-singup-label">
            Contraseña:
            <input
              type="password"
              id="input-password"
              value={password}
              required
              onChange={(ev) => setPassword(ev.target.value)}
              className="form-singup-input"
            />
          </label>
          <label htmlFor="input-verPassword" className="form-singup-label">
            Confirmar Contraseña:
            <input
              type="password"
              id="input-verPassword"
              value={verPassword}
              required
              onChange={(ev) => setverPassword(ev.target.value)}
              className="form-singup-input"
            />
          </label>

          <div className="box-btn-singup">
            <button type="button" className="btn-Singup">
              Registrarte
            </button>
          </div>
        </form>
      </section>
      {error && <p className="txtError">{error}</p>}
    </div>
  );
};
export default FnSingUp;
