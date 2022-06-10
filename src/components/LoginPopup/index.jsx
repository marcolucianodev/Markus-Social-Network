import React from "react";
import { Link } from "react-router-dom";
import { Container, FormLogin } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';

const LoginPopup = () => {
  return (
    <Container>
      <FormLogin>
        <div className="login-headline">
          <div className="login-headline-description">
            Faça login na sua conta
          </div>
          <div className="close-button">
            <CloseIcon className="close-icon-login" />
          </div>
        </div>
        <div className="form-login">
          <form action="POST">
            <div className="login-username">
              <label htmlFor="username">
                <input type="text" name="username" id="username" placeholder="Usuário" />
              </label>
            </div>
            <div className="login-password">
              <label htmlFor="user-password">
                <input type="password" name="user-password" id="user-password" placeholder="Senha" />
                <VisibilityIcon className="visibility-password-icon" />
              </label>
            </div>
            <div className="remember-login">
              <div className="remember-credentials">
                <label htmlFor="remember-password">
                  <input type="checkbox" name="remember-password" id="remember-password" /> Lembrar
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="forgot-password">
                <Link to="/">Esqueci minha senha</Link>
              </div>
            </div>
            <div className="send-button-login">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </FormLogin>
    </Container>
  )
};

export default LoginPopup;