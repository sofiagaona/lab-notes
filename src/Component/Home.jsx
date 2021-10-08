import React, {useState,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../Contextos/contexAuth'

const Home = ()=>{
    const { login } = useAuth();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, SetError] = useState('');
    const fnEmail = (ev)=>{setEmail(ev.target.value)}
    const fnPassword = (ev)=>{setPassword(ev.target.value)}
    //console.log(currentUser);

    const FnLogin = async(e) => {
        e.preventDefault();
       try{
          await login(email, password);
          history.push('/note')
       } 
       catch(error){
         SetError('Credencial invalida');
       }
    }

    return(
        <section>
        <div className='box-clcle-pink'><div className="circle-pink"><p className='logo'>N</p></div></div>
        <section>
            <div className='box-flex-login'>
                <div className = 'box-login'>
                 <h1 className = 'title-login'>Login</h1>
                 <div className = 'line'></div>
                 <p className = 'text-register'>¿Aún no tienes cuenta? <Link to='/singup'>Registrate</Link></p>
                 <form className = 'form-login' data-testid="form-login" onSubmit={FnLogin}>
                     <label>Correo:</label>
                     <input type="email" id = "sign_up_email" required onChange={fnEmail}></input>
                     <label>Contraseña:</label>
                     <input type="password" id = "sign_up_password" required onChange={fnPassword}></input>
                     <button type="submit" className ='btn-login'>Comienza</button>
                     <button type="submit" className ='btn-login-google'>Google</button>
                 </form>
                 {error&& <p>error</p>}
                </div>
            </div>
            </section>
           
        <div className='box-clcle-blue'><div className="med-circle"></div></div>
        <div className='box-clcle-yellow'><div className="circle-yellow"></div></div>
        <div className='box-clcle-purple'><div className="circle-purple"></div></div>
        <div className='box-medclcle-pink'><div className="medcircle-pink"></div></div>
       
        </section>
    )
}
export default Home