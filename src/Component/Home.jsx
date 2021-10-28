import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Contextos/contexAuth';

const Home = () => {
  const { login } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, SetError] = useState('');
  const fnEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const fnPassword = (ev) => {
    setPassword(ev.target.value);
  };

  const FnLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push('/note');
    } catch (error) {
      SetError('Credencial invalida');
    }
  };

  return (
    <section>
      <section>
        <div className="box-flex-login">
          <div className="box-login">
            <h1 className="title-login">Login</h1>
            <div className="line" />
            <p className="text-register">
              ¿Aún no tienes cuenta? <Link to="/singup">Registrate</Link>
            </p>
            <form
              className="form-login"
              data-testid="form-login"
              onSubmit={FnLogin}
            >
              <div className="box-email-password">
                <label
                  htmlFor="sign_up_email"
                  className="box-email-password-label"
                >
                  Correo
                  <input
                    type="email"
                    id="sign_up_email"
                    required
                    onChange={fnEmail}
                    className="box-email-password-input"
                  />
                </label>
                <label
                  htmlFor="sign_up_password"
                  className="box-email-password-label"
                >
                  Contraseña
                  <input
                    type="password"
                    id="sign_up_password"
                    required
                    onChange={fnPassword}
                    className="box-email-password-input"
                  />
                </label>
              </div>
              <button type="submit" className="btn-login">
                Comienza
              </button>
              {/* <button type="submit" className ='btn-login-google'>Google</button> */}
            </form>
            {error && <p>error</p>}
          </div>
        </div>
      </section>

      <div className="box-clcle-blue">
        <div className="med-circle" />
      </div>
      <div className="box-clcle-yellow">
        <div className="circle-yellow" />
      </div>
      <div className="box-clcle-purple">
        <div className="circle-purple" />
      </div>
      <div className="box-medclcle-pink">
        <div className="medcircle-pink" />
      </div>
    </section>
  );
};
export default Home;
