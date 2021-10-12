import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../Contextos/contexAuth';
import MakeNote from './MakeNote';
import GoogleMaps from './GoogleMaps';
import Logo from '../Imagenes/Logo.png'





const Note = ()=>{
    const { currentUser, logout } = useAuth();
    const history =useHistory();
    const [error, SetError] = useState('');
    const [click, setClick]=useState(0);
    
    
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
          
          <div className='box-grid'>
             <div className='secc-header'>
             <div className='logo'> 
             <div className='box-parrafo'><p className='parrafo-note'>Note's</p></div>
             <div className='box-clcle-yellow-note'><div className="circle-yellow-note"></div></div>
             <div className='box-clcle-blue-note'><div className="circle-blue-note"></div></div>
             <div className='box-clcle-purple-note'><div className="circle-purple-note"></div></div>
             </div> 
             {/*<img className='logo' src={Logo} alt="" />*/}
             <div className='btn-logout'><button  onClick={fnLogOut}>Log-Out</button></div>
             </div>
            <div className="secc-Nav">   
             <div><button className='btn-menu' onClick={()=>{setClick(1)}}>Nota</button></div>
             <div><button className='btn-menu' onClick={()=>{setClick(2)}}>Google Maps</button></div>
             {/*<div><button className='btn-menu' onClick={fnLogOut}>Log-Out</button></div>*/}
             {error&& <p>error</p>}
           </div>
            <div className='line-ver'></div>
            <div className="secc-Conteiner">
              {click===1 ? (<MakeNote  id={currentUser}/>) : 
               click===2 ? (<GoogleMaps/>):
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