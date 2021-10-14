import { useHistory } from 'react-router';
import React, {useState, useRef, useEffect} from 'react';
import { useAuth } from '../Contextos/contexAuth.js';
import _uniqueId from 'lodash/uniqueId';
import { doc, setDoc} from "firebase/firestore";
import { db } from "../Configuraciones/firebase";
import Note from './Note.jsx';
import { getStorageValue } from '../Hook/useLocal Storage';




const FnSingUp = () => {
    const {currentUser, signup } = useAuth();
    const history = useHistory();
    const [name, setName] = useState(getStorageValue('name',''));
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [verPassword, setverPassword]= useState('');
    const [error, setError]= useState('');
    const [loading, setLoading] = useState(false);
    const unmounted = useRef(false);
    const [id] = useState(_uniqueId('prefix-89'));
    
    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
      }, [name]);

    
    const setData = async (idUser)=>{
        const notes = doc(db, "user", idUser);
        await setDoc(notes, {
        note:{    
        [id] : {
            title:"",
            note:"",
        }
     }
      });
     }
   
    const formSingup = async (e) => {
        e.preventDefault()
        setLoading(true);

       if(password===verPassword){
        try { 
            const users=await signup(email, password)
            const idUser = users.user.uid;
            setData(idUser);
            history.push('/note');
        }
        catch(error){
            setError(error);
        }
       }
       else{
           setError('Verifique que las  contraseña sean iguales')
       }
      
       if (!unmounted) {
       setLoading(false);
    }
    }
  
    return(
        <div className = 'box-singup'>
            <section>
               <h1 className= 'txt-register'>Registro</h1>
                <div className='line-singup'></div>
            </section>
            <section className= 'box-form'>
                  <form className='form-singup' onSubmit={formSingup}>
                      <label>Nombre:</label>
                      <input type='text' id ='input-name' value={name} required onChange={(ev)=>setName(ev.target.value)}>
                      </input>
                      <label>Correo:</label>
                      <input type='email'id ='input-email' value={email} required onChange={(ev)=>setEmail(ev.target.value)}></input>
                      <label>Contraseña:</label>
                      <input type='password' id ='input-password' value={password} required onChange={(ev)=>setPassword(ev.target.value)}></input>
                      <label>Confirmar contraseña:</label>
                      <input type='password' id ='input-verPassword' value={verPassword} required onChange={(ev)=>setverPassword(ev.target.value)}></input>
                      <div className='box-btn-singup'><button className='btn-Singup' >Registrarte</button></div>
                  </form>
              </section>
              {error&&<p className='txtError'>{error}</p>}
        </div>
    )

}
export default FnSingUp