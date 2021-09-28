import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../Contextos/contexAuth';
import MakeNote from './MakeNote';
import Archivo from './Archivo';





const Note = ()=>{
    const { currentUser, logout, isLogged } = useAuth();
    const history =useHistory();
    const [error, SetError] = useState('');
    const [click, setClick]=useState(0);
    const [user, setUser]=useState({});
    
   //console.log(currentUser);

    const fnLogOut = async ()=>{
        try{
            
           await logout
           //setUser(currentUs);
           //console.log(currentUser);
           //console.log(user);
            history.push('/') 

        }
        catch(error){
        SetError(error);
        }
      
    }
    //<p>{currentUser}</p>
    return(
        <section>
         <p>{currentUser.uid}</p>
        <div className='box-menu'>
        <div><button className='btn-menu' onClick={()=>{setClick(1)}}>Nota</button></div>
        <div><button className='btn-menu' onClick={()=>{setClick(2)}}>Archivar</button></div>
        <div><button className='btn-menu' onClick={()=>{setClick(3)}}>Papelera</button></div>
       <div><button className='btn-menu' onClick={fnLogOut}>Log-Out</button></div>
       {error&& <p>error</p>}
       <div>
       {click===1 ? (<MakeNote  id={currentUser}/>) : 
       click===2 ? (<Archivo/>):
       click===3?
        <h1>Adios</h1>:
        <h1>Naada</h1>
      }
       </div>
       </div>
      
       </section>
       
    )
}
export default Note